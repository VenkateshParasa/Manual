import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import DayPage from './pages/DayPage';
import AssessmentPage from './pages/AssessmentPage';
import { initializeSearchIndex } from './utils/searchIndex';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchInitialized, setSearchInitialized] = useState(false);

  useEffect(() => {
    // Initialize search index
    const initSearch = async () => {
      try {
        const contentLoader = async (filename) => {
          try {
            const response = await fetch(`/${filename}`);
            if (!response.ok) return '';
            return await response.text();
          } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            return '';
          }
        };

        await initializeSearchIndex(contentLoader);
        setSearchInitialized(true);
      } catch (error) {
        console.error('Error initializing search:', error);
      }
    };

    initSearch();
  }, []);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header onMenuClick={handleMenuClick} />
        
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
          
          <main className="flex-1 min-w-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/day/:dayId" element={<DayPage />} />
              <Route path="/assessment/:dayId" element={<AssessmentPage />} />
              <Route path="/resource/:resourceId" element={<DayPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12 no-print">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">
                Manual Testing Mastery - 3 Week Intensive Learning Course
              </p>
              <p>
                Built with React, Vite, Tailwind CSS, and ❤️
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

const NotFound = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <div className="card text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        404 - Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn-primary">
        Return to Home
      </a>
    </div>
  </div>
);

export default App;