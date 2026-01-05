import Fuse from 'fuse.js';
import { getAllDays } from './contentStructure';

// Search configuration
const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'content', weight: 0.3 },
    { name: 'weekTitle', weight: 0.2 }
  ],
  threshold: 0.4,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  ignoreLocation: true
};

let fuseInstance = null;
let searchableContent = [];

// Initialize search index with content
export const initializeSearchIndex = async (contentLoader) => {
  try {
    const allDays = getAllDays();
    
    // Load content for all days
    searchableContent = await Promise.all(
      allDays.map(async (day) => {
        try {
          const content = await contentLoader(day.file);
          return {
            id: day.id,
            title: day.title,
            weekTitle: day.weekTitle,
            file: day.file,
            content: content || '',
            weekId: day.weekId
          };
        } catch (error) {
          console.error(`Error loading content for ${day.file}:`, error);
          return {
            id: day.id,
            title: day.title,
            weekTitle: day.weekTitle,
            file: day.file,
            content: '',
            weekId: day.weekId
          };
        }
      })
    );
    
    // Create Fuse instance
    fuseInstance = new Fuse(searchableContent, fuseOptions);
    
    return true;
  } catch (error) {
    console.error('Error initializing search index:', error);
    return false;
  }
};

// Perform search
export const search = (query) => {
  if (!fuseInstance || !query || query.trim().length < 2) {
    return [];
  }
  
  try {
    const results = fuseInstance.search(query);
    
    // Format results
    return results.map(result => ({
      day: {
        id: result.item.id,
        title: result.item.title,
        weekTitle: result.item.weekTitle,
        file: result.item.file,
        weekId: result.item.weekId
      },
      score: result.score,
      matches: result.matches?.map(match => ({
        key: match.key,
        value: match.value,
        indices: match.indices
      })) || []
    }));
  } catch (error) {
    console.error('Error performing search:', error);
    return [];
  }
};

// Get search suggestions (for autocomplete)
export const getSearchSuggestions = (query, limit = 5) => {
  if (!query || query.trim().length < 2) {
    return [];
  }
  
  const results = search(query);
  return results.slice(0, limit).map(r => r.day.title);
};

// Search within a specific week
export const searchInWeek = (query, weekId) => {
  if (!fuseInstance || !query || query.trim().length < 2) {
    return [];
  }
  
  const results = search(query);
  return results.filter(r => r.day.weekId === weekId);
};

// Get highlighted text snippet
export const getHighlightedSnippet = (text, query, contextLength = 100) => {
  if (!text || !query) return '';
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  
  if (index === -1) return text.substring(0, contextLength) + '...';
  
  const start = Math.max(0, index - contextLength / 2);
  const end = Math.min(text.length, index + query.length + contextLength / 2);
  
  let snippet = text.substring(start, end);
  
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
};

// Clear search index
export const clearSearchIndex = () => {
  fuseInstance = null;
  searchableContent = [];
};

// Check if search is ready
export const isSearchReady = () => {
  return fuseInstance !== null;
};