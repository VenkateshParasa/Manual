import { Link } from 'react-router-dom';
import { BookOpen, Clock, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { courseStructure, getAllDays } from '../utils/contentStructure';
import { getProgressStats } from '../utils/progressTracker';
import ProgressTracker from '../components/ProgressTracker';

const HomePage = () => {
  const allDays = getAllDays();
  const stats = getProgressStats(allDays.length);
  const nextDay = allDays.find((_, index) => index === stats.completed) || allDays[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Manual Testing Mastery
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          A comprehensive 3-week intensive course designed for QA professionals 
          to master manual testing from fundamentals to advanced techniques.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={`/day/${nextDay.id}`}
            className="btn-primary flex items-center gap-2"
          >
            {stats.completed === 0 ? 'Start Learning' : 'Continue Learning'}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#course-overview"
            className="btn-secondary"
          >
            View Course Overview
          </a>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={<BookOpen className="w-6 h-6" />}
          label="Total Days"
          value="21"
          color="blue"
        />
        <StatCard
          icon={<Clock className="w-6 h-6" />}
          label="Study Time"
          value="2-4 hrs/day"
          color="green"
        />
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Completion"
          value={`${stats.percentage}%`}
          color="purple"
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Days Done"
          value={`${stats.completed}/${stats.total}`}
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Course Weeks */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="course-overview">
            Course Overview
          </h2>
          
          {courseStructure.weeks.map((week, index) => (
            <WeekCard key={week.id} week={week} weekNumber={index + 1} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ProgressTracker />
          
          {/* Quick Links */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <QuickLink
                to="/resource/overview"
                label="Learning Plan Overview"
                icon="📋"
              />
              <QuickLink
                to="/resource/week1-supplementary"
                label="Supplementary Materials"
                icon="📚"
              />
            </div>
          </div>

          {/* Features */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Course Features
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Comprehensive 21-day curriculum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Practical exercises and assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Progress tracking with localStorage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Searchable content library</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Mobile-friendly responsive design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Accessible and keyboard-navigable</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="card">
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const WeekCard = ({ week, weekNumber }) => {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
          W{weekNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {week.title}
          </h3>
          <ul className="space-y-2">
            {week.days.map((day) => (
              <li key={day.id}>
                <Link
                  to={`/day/${day.id}`}
                  className="text-sm text-gray-600 hover:text-primary-600 hover:underline"
                >
                  {day.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ to, label, icon }) => (
  <Link
    to={to}
    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm text-gray-700">{label}</span>
  </Link>
);

export default HomePage;