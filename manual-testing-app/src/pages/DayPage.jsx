import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getDayById, getAdjacentDays } from '../utils/contentStructure';
import { hasAssessment } from '../data/assessments';
import { getAssessmentResult } from '../utils/assessmentStorage';
import TableOfContents from '../components/TableOfContents';
import ProgressTracker from '../components/ProgressTracker';
import 'highlight.js/styles/github-dark.css';

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
          <article className="prose prose-lg max-w-none mb-12 prose-headings:scroll-mt-20">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeHighlight]}
              components={{
                // Custom rendering for code blocks
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline ? (
                    <pre className={className}>
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                },
                // Custom rendering for links
                a({ node, children, href, ...props }) {
                  return (
                    <a
                      href={href}
                      className="text-primary-600 hover:text-primary-700 underline"
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
                // Custom rendering for tables
                table({ node, children, ...props }) {
                  return (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full divide-y divide-gray-300" {...props}>
                        {children}
                      </table>
                    </div>
                  );
                },
                // Custom rendering for headings to add IDs
                h1({ node, children, ...props }) {
                  const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  return <h1 id={id} {...props}>{children}</h1>;
                },
                h2({ node, children, ...props }) {
                  const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3({ node, children, ...props }) {
                  const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  return <h3 id={id} {...props}>{children}</h3>;
                },
                h4({ node, children, ...props }) {
                  const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  return <h4 id={id} {...props}>{children}</h4>;
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

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

export default DayPage;