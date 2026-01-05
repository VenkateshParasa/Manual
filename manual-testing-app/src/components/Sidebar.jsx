import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Menu, X } from 'lucide-react';
import { courseStructure } from '../utils/contentStructure';
import { isDayCompleted } from '../utils/progressTracker';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedWeeks, setExpandedWeeks] = useState(['week1']);
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    // Load completed days from localStorage
    const loadCompletedDays = () => {
      const completed = [];
      courseStructure.weeks.forEach(week => {
        week.days.forEach(day => {
          if (isDayCompleted(day.id)) {
            completed.push(day.id);
          }
        });
      });
      setCompletedDays(completed);
    };

    loadCompletedDays();
    
    // Listen for storage changes
    const handleStorageChange = () => {
      loadCompletedDays();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('progressUpdate', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('progressUpdate', handleStorageChange);
    };
  }, []);

  const toggleWeek = (weekId) => {
    setExpandedWeeks(prev => 
      prev.includes(weekId) 
        ? prev.filter(id => id !== weekId)
        : [...prev, weekId]
    );
  };

  const isCurrentPath = (dayId) => {
    return location.pathname === `/day/${dayId}`;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-80 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          z-50 lg:z-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
        aria-label="Course navigation"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Manual Testing Course
          </h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {/* Home Link */}
          <Link
            to="/"
            className={`sidebar-link flex items-center gap-2 ${
              location.pathname === '/' ? 'active' : ''
            }`}
            onClick={() => window.innerWidth < 1024 && onClose()}
          >
            <span>🏠</span>
            <span>Home</span>
          </Link>

          {/* Week Sections */}
          {courseStructure.weeks.map((week) => {
            const isExpanded = expandedWeeks.includes(week.id);
            const weekCompletedCount = week.days.filter(day => 
              completedDays.includes(day.id)
            ).length;
            const weekProgress = Math.round((weekCompletedCount / week.days.length) * 100);

            return (
              <div key={week.id} className="space-y-1">
                {/* Week Header */}
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`week-${week.id}-content`}
                >
                  <div className="flex items-center gap-2 flex-1 text-left">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                    <span className="font-medium text-sm text-gray-900">
                      {week.title}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    {weekCompletedCount}/{week.days.length}
                  </span>
                </button>

                {/* Progress Bar */}
                {isExpanded && (
                  <div className="mx-3 mb-2">
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-600 transition-all duration-300"
                        style={{ width: `${weekProgress}%` }}
                        role="progressbar"
                        aria-valuenow={weekProgress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                )}

                {/* Day Links */}
                {isExpanded && (
                  <div 
                    id={`week-${week.id}-content`}
                    className="ml-6 space-y-1"
                  >
                    {week.days.map((day) => {
                      const isCompleted = completedDays.includes(day.id);
                      const isCurrent = isCurrentPath(day.id);

                      return (
                        <Link
                          key={day.id}
                          to={`/day/${day.id}`}
                          className={`
                            sidebar-link flex items-center gap-2 text-sm
                            ${isCurrent ? 'active' : ''}
                          `}
                          onClick={() => window.innerWidth < 1024 && onClose()}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span className="flex-1">{day.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Supplementary Materials */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Resources
            </h3>
            {courseStructure.supplementary.map((item) => (
              <Link
                key={item.id}
                to={`/resource/${item.id}`}
                className={`sidebar-link text-sm ${
                  location.pathname === `/resource/${item.id}` ? 'active' : ''
                }`}
                onClick={() => window.innerWidth < 1024 && onClose()}
              >
                📚 {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;