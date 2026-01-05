import { Menu } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">
                Manual Testing Mastery
              </h1>
              <p className="text-xs text-gray-600">
                3-Week Intensive Learning Course
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <SearchBar />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle (Future Enhancement) */}
            {/* <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 text-gray-700" />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;