const ASSESSMENT_STORAGE_KEY = 'manual-testing-assessments';

// Get all assessment results
export const getAssessmentResults = () => {
  try {
    const stored = localStorage.getItem(ASSESSMENT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading assessment results:', error);
    return {};
  }
};

// Save assessment result
export const saveAssessmentResult = (dayId, result) => {
  try {
    const results = getAssessmentResults();
    
    // Store the result with timestamp
    results[dayId] = {
      ...result,
      completedAt: new Date().toISOString(),
      attempts: (results[dayId]?.attempts || 0) + 1
    };
    
    localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(results));
    
    // Dispatch event for other components to update
    window.dispatchEvent(new Event('assessmentUpdate'));
    
    return results[dayId];
  } catch (error) {
    console.error('Error saving assessment result:', error);
    return null;
  }
};

// Get assessment result for a specific day
export const getAssessmentResult = (dayId) => {
  const results = getAssessmentResults();
  return results[dayId] || null;
};

// Check if assessment is passed
export const isAssessmentPassed = (dayId) => {
  const result = getAssessmentResult(dayId);
  return result ? result.passed : false;
};

// Get assessment statistics
export const getAssessmentStats = () => {
  const results = getAssessmentResults();
  const dayIds = Object.keys(results);
  
  const passed = dayIds.filter(id => results[id].passed).length;
  const failed = dayIds.filter(id => !results[id].passed).length;
  const totalAttempts = dayIds.reduce((sum, id) => sum + (results[id].attempts || 1), 0);
  const averageScore = dayIds.length > 0
    ? Math.round(dayIds.reduce((sum, id) => sum + results[id].percentage, 0) / dayIds.length)
    : 0;
  
  return {
    totalAssessments: dayIds.length,
    passed,
    failed,
    totalAttempts,
    averageScore,
    passRate: dayIds.length > 0 ? Math.round((passed / dayIds.length) * 100) : 0
  };
};

// Reset assessment for a day (for retake)
export const resetAssessment = (dayId) => {
  try {
    const results = getAssessmentResults();
    delete results[dayId];
    localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(results));
    window.dispatchEvent(new Event('assessmentUpdate'));
    return true;
  } catch (error) {
    console.error('Error resetting assessment:', error);
    return false;
  }
};

// Reset all assessments
export const resetAllAssessments = () => {
  try {
    localStorage.removeItem(ASSESSMENT_STORAGE_KEY);
    window.dispatchEvent(new Event('assessmentUpdate'));
    return true;
  } catch (error) {
    console.error('Error resetting all assessments:', error);
    return false;
  }
};

// Export assessment results as JSON
export const exportAssessmentResults = () => {
  const results = getAssessmentResults();
  const stats = getAssessmentStats();
  
  const exportData = {
    results,
    stats,
    exportDate: new Date().toISOString(),
    version: '1.0'
  };
  
  return JSON.stringify(exportData, null, 2);
};

// Get best score for a day
export const getBestScore = (dayId) => {
  const result = getAssessmentResult(dayId);
  return result ? result.percentage : 0;
};

// Check if can retake assessment
export const canRetakeAssessment = (dayId, maxAttempts = 3) => {
  const result = getAssessmentResult(dayId);
  if (!result) return true;
  return result.attempts < maxAttempts;
};