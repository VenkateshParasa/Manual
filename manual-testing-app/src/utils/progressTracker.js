const STORAGE_KEY = 'manual-testing-progress';

// Get all completed days from localStorage
export const getCompletedDays = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading progress from localStorage:', error);
    return [];
  }
};

// Mark a day as completed
export const markDayCompleted = (dayId) => {
  try {
    const completed = getCompletedDays();
    if (!completed.includes(dayId)) {
      completed.push(dayId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    }
    return completed;
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
    return getCompletedDays();
  }
};

// Mark a day as incomplete
export const markDayIncomplete = (dayId) => {
  try {
    const completed = getCompletedDays();
    const filtered = completed.filter(id => id !== dayId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (error) {
    console.error('Error updating progress in localStorage:', error);
    return getCompletedDays();
  }
};

// Toggle day completion status
export const toggleDayCompletion = (dayId) => {
  const completed = getCompletedDays();
  if (completed.includes(dayId)) {
    return markDayIncomplete(dayId);
  } else {
    return markDayCompleted(dayId);
  }
};

// Check if a day is completed
export const isDayCompleted = (dayId) => {
  const completed = getCompletedDays();
  return completed.includes(dayId);
};

// Reset all progress
export const resetProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  } catch (error) {
    console.error('Error resetting progress:', error);
    return getCompletedDays();
  }
};

// Export progress data
export const exportProgress = () => {
  const completed = getCompletedDays();
  const data = {
    completedDays: completed,
    exportDate: new Date().toISOString(),
    version: '1.0'
  };
  return JSON.stringify(data, null, 2);
};

// Import progress data
export const importProgress = (jsonString) => {
  try {
    const data = JSON.parse(jsonString);
    if (data.completedDays && Array.isArray(data.completedDays)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.completedDays));
      return data.completedDays;
    }
    throw new Error('Invalid progress data format');
  } catch (error) {
    console.error('Error importing progress:', error);
    throw error;
  }
};

// Get progress statistics
export const getProgressStats = (totalDays) => {
  const completed = getCompletedDays();
  const completedCount = completed.length;
  const percentage = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;
  
  return {
    completed: completedCount,
    total: totalDays,
    remaining: totalDays - completedCount,
    percentage
  };
};