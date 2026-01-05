import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, TrendingUp, Award } from 'lucide-react';
import { getAllDays } from '../utils/contentStructure';
import { getProgressStats, toggleDayCompletion, isDayCompleted } from '../utils/progressTracker';

const ProgressTracker = ({ currentDayId }) => {
  const [stats, setStats] = useState({ completed: 0, total: 0, remaining: 0, percentage: 0 });
  const [isCurrentCompleted, setIsCurrentCompleted] = useState(false);

  const updateStats = () => {
    const allDays = getAllDays();
    const newStats = getProgressStats(allDays.length);
    setStats(newStats);
    
    if (currentDayId) {
      setIsCurrentCompleted(isDayCompleted(currentDayId));
    }
  };

  useEffect(() => {
    updateStats();

    // Listen for progress updates
    const handleProgressUpdate = () => {
      updateStats();
    };

    window.addEventListener('storage', handleProgressUpdate);
    window.addEventListener('progressUpdate', handleProgressUpdate);

    return () => {
      window.removeEventListener('storage', handleProgressUpdate);
      window.removeEventListener('progressUpdate', handleProgressUpdate);
    };
  }, [currentDayId]);

  const handleToggleCompletion = () => {
    if (currentDayId) {
      toggleDayCompletion(currentDayId);
      updateStats();
      
      // Dispatch custom event to update other components
      window.dispatchEvent(new Event('progressUpdate'));
    }
  };

  const getMotivationalMessage = () => {
    const { percentage } = stats;
    
    if (percentage === 0) {
      return "Let's start your learning journey! 🚀";
    } else if (percentage < 25) {
      return "Great start! Keep going! 💪";
    } else if (percentage < 50) {
      return "You're making excellent progress! 🌟";
    } else if (percentage < 75) {
      return "More than halfway there! 🎯";
    } else if (percentage < 100) {
      return "Almost there! You're doing amazing! 🔥";
    } else {
      return "Congratulations! Course completed! 🎉";
    }
  };

  const getProgressColor = () => {
    const { percentage } = stats;
    
    if (percentage < 25) return 'bg-red-500';
    if (percentage < 50) return 'bg-orange-500';
    if (percentage < 75) return 'bg-yellow-500';
    if (percentage < 100) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-4">
      {/* Overall Progress Card */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary-600" />
            Your Progress
          </h3>
          {stats.percentage === 100 && (
            <Award className="w-6 h-6 text-yellow-500" />
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{stats.completed} of {stats.total} days completed</span>
            <span className="font-semibold">{stats.percentage}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor()} transition-all duration-500 ease-out`}
              style={{ width: `${stats.percentage}%` }}
              role="progressbar"
              aria-valuenow={stats.percentage}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`Course progress: ${stats.percentage}%`}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.remaining}</div>
            <div className="text-xs text-gray-600">Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.total}</div>
            <div className="text-xs text-gray-600">Total Days</div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 text-center">
          <p className="text-sm font-medium text-primary-900">
            {getMotivationalMessage()}
          </p>
        </div>
      </div>

      {/* Current Day Completion Toggle */}
      {currentDayId && (
        <div className="card">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Mark Current Day
          </h4>
          <button
            onClick={handleToggleCompletion}
            className={`
              w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg
              transition-all duration-200 font-medium
              ${isCurrentCompleted
                ? 'bg-green-50 text-green-700 border-2 border-green-500 hover:bg-green-100'
                : 'bg-gray-50 text-gray-700 border-2 border-gray-300 hover:bg-gray-100'
              }
            `}
            aria-pressed={isCurrentCompleted}
          >
            {isCurrentCompleted ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Completed ✓</span>
              </>
            ) : (
              <>
                <Circle className="w-5 h-5" />
                <span>Mark as Complete</span>
              </>
            )}
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            {isCurrentCompleted 
              ? 'Great job! Click to mark as incomplete'
              : 'Click when you finish this day'
            }
          </p>
        </div>
      )}

      {/* Milestones */}
      {stats.percentage > 0 && (
        <div className="card">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Milestones
          </h4>
          <div className="space-y-2">
            <MilestoneItem 
              label="First Day" 
              achieved={stats.completed >= 1}
              icon="🎯"
            />
            <MilestoneItem 
              label="Week 1 Complete" 
              achieved={stats.completed >= 7}
              icon="📚"
            />
            <MilestoneItem 
              label="Halfway There" 
              achieved={stats.percentage >= 50}
              icon="⭐"
            />
            <MilestoneItem 
              label="Week 2 Complete" 
              achieved={stats.completed >= 14}
              icon="🚀"
            />
            <MilestoneItem 
              label="Course Complete" 
              achieved={stats.percentage === 100}
              icon="🏆"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const MilestoneItem = ({ label, achieved, icon }) => (
  <div className={`
    flex items-center gap-3 p-2 rounded-lg transition-colors
    ${achieved ? 'bg-green-50' : 'bg-gray-50'}
  `}>
    <span className="text-2xl">{icon}</span>
    <span className={`
      text-sm font-medium flex-1
      ${achieved ? 'text-green-900' : 'text-gray-500'}
    `}>
      {label}
    </span>
    {achieved && (
      <CheckCircle2 className="w-5 h-5 text-green-600" />
    )}
  </div>
);

export default ProgressTracker;