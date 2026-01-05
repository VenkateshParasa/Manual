import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BookOpen, Award, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { getDayById } from '../utils/contentStructure';
import { getAssessment, hasAssessment } from '../data/assessments';
import { getAssessmentResult, canRetakeAssessment } from '../utils/assessmentStorage';
import AssessmentQuiz from '../components/AssessmentQuiz';

const AssessmentPage = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  const [day, setDay] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [previousResult, setPreviousResult] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssessment = () => {
      const dayData = getDayById(dayId);
      if (!dayData) {
        setLoading(false);
        return;
      }

      setDay(dayData);

      if (!hasAssessment(dayId)) {
        setLoading(false);
        return;
      }

      const assessmentData = getAssessment(dayId);
      setAssessment(assessmentData);

      const result = getAssessmentResult(dayId);
      setPreviousResult(result);

      setLoading(false);
    };

    loadAssessment();
    window.scrollTo(0, 0);
  }, [dayId]);

  const handleStartAssessment = () => {
    setShowQuiz(true);
  };

  const handleCompleteAssessment = (results) => {
    setPreviousResult(results);
    setShowQuiz(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  if (!day) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Day Not Found</h2>
          <p className="text-gray-600 mb-6">The requested day could not be found.</p>
          <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Assessment Available</h2>
          <p className="text-gray-600 mb-6">
            This day doesn't have an assessment yet. Check back later!
          </p>
          <Link to={`/day/${dayId}`} className="btn-primary">Back to Lesson</Link>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="px-4 py-8">
        <AssessmentQuiz 
          assessment={assessment} 
          dayId={dayId}
          onComplete={handleCompleteAssessment}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-gray-600">
          <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
          <li>/</li>
          <li><Link to={`/day/${dayId}`} className="hover:text-primary-600">{day.title}</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Assessment</li>
        </ol>
      </nav>

      {/* Assessment Info */}
      <div className="card mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {assessment.title}
            </h1>
            <p className="text-gray-600">
              Test your knowledge of {day.title}
            </p>
          </div>
        </div>

        {/* Assessment Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">Questions</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {assessment.questions.length}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Time Limit</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {assessment.timeLimit} min
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <Award className="w-5 h-5" />
              <span className="text-sm">Passing Score</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {assessment.passingScore}%
            </div>
          </div>
        </div>

        {/* Previous Result */}
        {previousResult && (
          <div className={`p-4 rounded-lg mb-6 ${previousResult.passed ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'}`}>
            <div className="flex items-center gap-3">
              {previousResult.passed ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-orange-600" />
              )}
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  {previousResult.passed ? 'Previous Attempt: Passed ✓' : 'Previous Attempt: Not Passed'}
                </p>
                <p className="text-sm text-gray-600">
                  Score: {previousResult.percentage}% ({previousResult.earnedPoints}/{previousResult.totalPoints} points) • 
                  Grade: {previousResult.grade} • 
                  Attempts: {previousResult.attempts}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Instructions:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Answer all {assessment.questions.length} questions within {assessment.timeLimit} minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>You need to score at least {assessment.passingScore}% to pass</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>You can navigate between questions using Previous/Next buttons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>The assessment will auto-submit when time runs out</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>You can retake the assessment up to 3 times</span>
            </li>
          </ul>
        </div>

        {/* Question Types */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Question Types:</h3>
          <div className="flex flex-wrap gap-2">
            {getQuestionTypes(assessment).map((type, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {canRetakeAssessment(dayId) ? (
            <button
              onClick={handleStartAssessment}
              className="btn-primary flex items-center gap-2"
            >
              {previousResult ? 'Retake Assessment' : 'Start Assessment'}
              <Award className="w-5 h-5" />
            </button>
          ) : (
            <div className="text-orange-600 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>Maximum attempts reached (3/3)</span>
            </div>
          )}
          
          <Link
            to={`/day/${dayId}`}
            className="btn-secondary"
          >
            Back to Lesson
          </Link>
        </div>
      </div>

      {/* Tips Card */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-3">💡 Tips for Success:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-0.5">✓</span>
            <span>Review the lesson content before starting the assessment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-0.5">✓</span>
            <span>Read each question carefully before answering</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-0.5">✓</span>
            <span>Manage your time wisely - you have {assessment.timeLimit} minutes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-0.5">✓</span>
            <span>Answer all questions - unanswered questions receive 0 points</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 mt-0.5">✓</span>
            <span>Review your answers before submitting</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Helper function to get unique question types
const getQuestionTypes = (assessment) => {
  const types = new Set();
  assessment.questions.forEach(q => {
    switch(q.type) {
      case 'mcq':
        types.add('Multiple Choice');
        break;
      case 'truefalse':
        types.add('True/False');
        break;
      case 'fillblank':
        types.add('Fill in the Blank');
        break;
      case 'shortanswer':
        types.add('Short Answer');
        break;
      default:
        types.add(q.type);
    }
  });
  return Array.from(types);
};

export default AssessmentPage;