import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { getDayById, getAdjacentDays } from '../utils/contentStructure';
import { hasAssessment } from '../data/assessments';
import { getAssessmentResult } from '../utils/assessmentStorage';
import TableOfContents from '../components/TableOfContents';
import ProgressTracker from '../components/ProgressTracker';

const DayPage = () => {
  const { dayId } = useParams();
  const [day, setDay] = useState(null);
  const [content, setContent] = useState('');
  const [adjacentDays, setAdjacentDays] = useState({ previous: null, next: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [assessmentAvailable, setAssessmentAvailable] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(null);

  useEffect(() => {
    const loadDay = async () => {
      setLoading(true);
      setError(null);

      try {
        const dayData = getDayById(dayId);
        if (!dayData) {
          setError('Day not found');
          setLoading(false);
          return;
        }

        setDay(dayData);
        setAdjacentDays(getAdjacentDays(dayId));
        
        // Check if assessment is available
        const hasAssess = hasAssessment(dayId);
        setAssessmentAvailable(hasAssess);
        
        if (hasAssess) {
          const result = getAssessmentResult(dayId);
          setAssessmentResult(result);
        }

        // Load markdown content
        try {
          const response = await fetch(`/${dayData.file}`);
          if (!response.ok) {
            throw new Error('Content not found');
          }
          const text = await response.text();
          setContent(text);
        } catch (err) {
          console.error('Error loading content:', err);
          setContent(`# ${dayData.title}\n\nContent is being loaded...`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDay();
    window.scrollTo(0, 0);
    
    // Listen for assessment updates
    const handleAssessmentUpdate = () => {
      if (hasAssessment(dayId)) {
        const result = getAssessmentResult(dayId);
        setAssessmentResult(result);
      }
    };
    
    window.addEventListener('assessmentUpdate', handleAssessmentUpdate);
    return () => window.removeEventListener('assessmentUpdate', handleAssessmentUpdate);
  }, [dayId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error || !day) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Content Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            {error || 'The requested day could not be found.'}
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_256px] gap-8">
        {/* Main Content */}
        <div className="min-w-0">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate">
                {day.title}
              </li>
            </ol>
          </nav>

          {/* Day Header */}
          <div className="mb-8">
            <div className="text-sm text-primary-600 font-medium mb-2">
              {day.weekTitle}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {day.title}
            </h1>
            
            {/* Assessment Button */}
            {assessmentAvailable && (
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link
                  to={`/assessment/${dayId}`}
                  className="btn-primary flex items-center gap-2"
                >
                  <Award className="w-5 h-5" />
                  {assessmentResult ? 'View Assessment Results' : 'Take Assessment'}
                </Link>
                
                {assessmentResult && (
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    assessmentResult.passed 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-orange-50 text-orange-700 border border-orange-200'
                  }`}>
                    {assessmentResult.passed ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Passed: {assessmentResult.percentage}%</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-5 h-5" />
                        <span className="font-medium">Score: {assessmentResult.percentage}%</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Markdown Content */}
          <article 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
            {adjacentDays.previous ? (
              <Link
                to={`/day/${adjacentDays.previous.id}`}
                className="flex-1 card hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3">
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">Previous</div>
                    <div className="font-medium text-gray-900 truncate">
                      {adjacentDays.previous.title}
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {adjacentDays.next ? (
              <Link
                to={`/day/${adjacentDays.next.id}`}
                className="flex-1 card hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0 text-right">
                    <div className="text-xs text-gray-500 mb-1">Next</div>
                    <div className="font-medium text-gray-900 truncate">
                      {adjacentDays.next.title}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          <div className="xl:sticky xl:top-20">
            <ProgressTracker currentDayId={dayId} />
            <div className="mt-6">
              <TableOfContents content={content} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Simple markdown to HTML converter (basic implementation)
const renderMarkdown = (markdown) => {
  if (!markdown) return '';
  
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 id="$1">$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  
  // Wrap in paragraphs
  html = '<p>' + html + '</p>';
  
  return html;
};

export default DayPage;