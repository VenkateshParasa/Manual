import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  Trophy
} from 'lucide-react';
import { calculateScore } from '../data/assessments';
import { saveAssessmentResult } from '../utils/assessmentStorage';

const AssessmentQuiz = ({ assessment, dayId, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(assessment.timeLimit * 60); // Convert to seconds
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  // Timer
  useEffect(() => {
    if (showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore(answers, assessment);
    setResults(score);
    setShowResults(true);
    
    // Save to localStorage
    saveAssessmentResult(dayId, {
      ...score,
      answers,
      questions: assessment.questions.length
    });
    
    if (onComplete) {
      onComplete(score);
    }
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  const question = assessment.questions[currentQuestion];
  const isLastQuestion = currentQuestion === assessment.questions.length - 1;
  const answeredCount = getAnsweredCount();
  const totalQuestions = assessment.questions.length;

  if (showResults && results) {
    return <ResultsView results={results} assessment={assessment} answers={answers} dayId={dayId} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{assessment.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              Question {currentQuestion + 1} of {totalQuestions}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5" />
              <span className={`font-mono font-semibold ${timeRemaining < 60 ? 'text-red-600' : ''}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{answeredCount} / {totalQuestions} answered</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-600 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="card mb-6">
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {currentQuestion + 1}
            </div>
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-900 mb-2">
                {question.question}
              </p>
              <span className="text-sm text-gray-500">
                {question.points} {question.points === 1 ? 'point' : 'points'}
              </span>
            </div>
          </div>

          {/* Question Type Specific UI */}
          <div className="mt-6">
            {question.type === 'mcq' && (
              <MCQQuestion 
                question={question}
                answer={answers[question.id]}
                onAnswer={(answer) => handleAnswer(question.id, answer)}
              />
            )}
            
            {question.type === 'truefalse' && (
              <TrueFalseQuestion 
                question={question}
                answer={answers[question.id]}
                onAnswer={(answer) => handleAnswer(question.id, answer)}
              />
            )}
            
            {question.type === 'fillblank' && (
              <FillBlankQuestion 
                question={question}
                answer={answers[question.id]}
                onAnswer={(answer) => handleAnswer(question.id, answer)}
              />
            )}
            
            {question.type === 'shortanswer' && (
              <ShortAnswerQuestion 
                question={question}
                answer={answers[question.id]}
                onAnswer={(answer) => handleAnswer(question.id, answer)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="text-sm text-gray-600">
          {answeredCount < totalQuestions && (
            <span className="flex items-center gap-2 text-orange-600">
              <AlertCircle className="w-4 h-4" />
              {totalQuestions - answeredCount} unanswered
            </span>
          )}
        </div>

        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            className="btn-primary flex items-center gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="btn-primary flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            Submit Assessment
            <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// MCQ Question Component
const MCQQuestion = ({ question, answer, onAnswer }) => {
  return (
    <div className="space-y-3">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index)}
          className={`
            w-full text-left p-4 rounded-lg border-2 transition-all
            ${answer === index 
              ? 'border-primary-600 bg-primary-50' 
              : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${answer === index 
                ? 'border-primary-600 bg-primary-600' 
                : 'border-gray-300'
              }
            `}>
              {answer === index && (
                <div className="w-3 h-3 bg-white rounded-full" />
              )}
            </div>
            <span className="flex-1">{option}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

// True/False Question Component
const TrueFalseQuestion = ({ question, answer, onAnswer }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onAnswer(true)}
        className={`
          flex-1 p-6 rounded-lg border-2 transition-all
          ${answer === true 
            ? 'border-green-600 bg-green-50' 
            : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
          }
        `}
      >
        <div className="text-center">
          <CheckCircle2 className={`w-8 h-8 mx-auto mb-2 ${answer === true ? 'text-green-600' : 'text-gray-400'}`} />
          <span className="font-semibold">True</span>
        </div>
      </button>
      
      <button
        onClick={() => onAnswer(false)}
        className={`
          flex-1 p-6 rounded-lg border-2 transition-all
          ${answer === false 
            ? 'border-red-600 bg-red-50' 
            : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
          }
        `}
      >
        <div className="text-center">
          <XCircle className={`w-8 h-8 mx-auto mb-2 ${answer === false ? 'text-red-600' : 'text-gray-400'}`} />
          <span className="font-semibold">False</span>
        </div>
      </button>
    </div>
  );
};

// Fill in the Blank Question Component
const FillBlankQuestion = ({ question, answer, onAnswer }) => {
  return (
    <div>
      <input
        type="text"
        value={answer || ''}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <p className="text-sm text-gray-500 mt-2">
        Enter your answer in the blank above
      </p>
    </div>
  );
};

// Short Answer Question Component
const ShortAnswerQuestion = ({ question, answer, onAnswer }) => {
  return (
    <div>
      <textarea
        value={answer || ''}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Type your answer here..."
        rows={4}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
      />
      <p className="text-sm text-gray-500 mt-2">
        Provide a detailed answer (minimum {question.minKeywords} key points)
      </p>
    </div>
  );
};

// Results View Component
const ResultsView = ({ results, assessment, answers, dayId }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Results Header */}
      <div className="card mb-6 text-center">
        <div className="mb-6">
          {results.passed ? (
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          ) : (
            <AlertCircle className="w-20 h-20 text-orange-500 mx-auto mb-4" />
          )}
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {results.passed ? 'Congratulations! 🎉' : 'Keep Trying! 💪'}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {results.passed 
              ? 'You have successfully passed this assessment!'
              : 'You need to score at least ' + assessment.passingScore + '% to pass.'
            }
          </p>
        </div>

        {/* Score Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600">{results.percentage}%</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-900">{results.grade}</div>
            <div className="text-sm text-gray-600">Grade</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{results.earnedPoints}</div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-600">{results.totalPoints}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate(`/day/${dayId}`)}
            className="btn-primary"
          >
            Back to Lesson
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary"
          >
            Retake Assessment
          </button>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Review Your Answers</h3>
        <div className="space-y-6">
          {assessment.questions.map((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = checkAnswer(question, userAnswer);
            
            return (
              <div key={question.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-2">
                      Question {index + 1}: {question.question}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Your answer:</span> {formatUserAnswer(question, userAnswer)}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Correct answer:</span> {formatCorrectAnswer(question)}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 italic">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper functions
const checkAnswer = (question, userAnswer) => {
  if (userAnswer === undefined || userAnswer === null) return false;
  
  if (question.type === 'mcq' || question.type === 'truefalse') {
    return userAnswer === question.correctAnswer;
  } else if (question.type === 'fillblank') {
    const acceptable = question.acceptableAnswers || [question.correctAnswer];
    const userAnswerNormalized = question.caseSensitive 
      ? userAnswer.trim() 
      : userAnswer.trim().toLowerCase();
    
    return acceptable.some(ans => {
      const ansNormalized = question.caseSensitive 
        ? ans.trim() 
        : ans.trim().toLowerCase();
      return userAnswerNormalized === ansNormalized;
    });
  } else if (question.type === 'shortanswer') {
    const userAnswerLower = userAnswer.toLowerCase();
    const matchedKeywords = question.keywords.filter(keyword => 
      userAnswerLower.includes(keyword.toLowerCase())
    );
    return matchedKeywords.length >= question.minKeywords;
  }
  
  return false;
};

const formatUserAnswer = (question, answer) => {
  if (answer === undefined || answer === null) return 'Not answered';
  
  if (question.type === 'mcq') {
    return question.options[answer] || 'Not answered';
  } else if (question.type === 'truefalse') {
    return answer ? 'True' : 'False';
  } else {
    return answer;
  }
};

const formatCorrectAnswer = (question) => {
  if (question.type === 'mcq') {
    return question.options[question.correctAnswer];
  } else if (question.type === 'truefalse') {
    return question.correctAnswer ? 'True' : 'False';
  } else if (question.type === 'fillblank') {
    return question.correctAnswer;
  } else if (question.type === 'shortanswer') {
    return question.sampleAnswer;
  }
  return '';
};

export default AssessmentQuiz;