import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { search, isSearchReady } from '../utils/searchIndex';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchReady, setSearchReady] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setSearchReady(isSearchReady());
  }, []);

  useEffect(() => {
    // Close search on click outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Perform search when query changes
    if (query.trim().length >= 2 && searchReady) {
      const searchResults = search(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
      setIsOpen(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, searchReady]);

  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          navigateToResult(results[selectedIndex].day);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
      default:
        break;
    }
  };

  const navigateToResult = (day) => {
    navigate(`/day/${day.id}`);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 font-medium">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder={searchReady ? "Search course content..." : "Loading search..."}
          disabled={!searchReady}
          className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          aria-label="Search course content"
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-expanded={isOpen}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
          role="listbox"
        >
          {results.map((result, index) => (
            <button
              key={result.day.id}
              onClick={() => navigateToResult(result.day)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`
                w-full text-left px-4 py-3 border-b border-gray-100 last:border-b-0
                hover:bg-gray-50 transition-colors
                ${index === selectedIndex ? 'bg-primary-50' : ''}
              `}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 mb-1">
                    {highlightMatch(result.day.title, query)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {result.day.weekTitle}
                  </div>
                  {result.matches && result.matches.length > 0 && (
                    <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {result.matches[0].value.substring(0, 100)}...
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 text-xs text-gray-400">
                  {Math.round((1 - result.score) * 100)}% match
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && results.length === 0 && searchReady && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <p className="text-gray-600 text-center">
            No results found for "<span className="font-medium">{query}</span>"
          </p>
          <p className="text-sm text-gray-500 text-center mt-1">
            Try different keywords or check spelling
          </p>
        </div>
      )}

      {/* Keyboard Shortcuts Hint */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full text-xs text-gray-500 text-center">
          <span className="bg-white px-2 py-1 rounded border border-gray-200">
            ↑↓ Navigate • Enter Select • Esc Close
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;