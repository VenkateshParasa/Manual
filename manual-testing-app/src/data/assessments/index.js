// Import all day assessments
import day1 from './day1.js';
import day2 from './day2.js';
import day3 from './day3.js';
import day4 from './day4.js';
import day5 from './day5.js';
import day6 from './day6.js';
import day7 from './day7.js';
import day8 from './day8.js';
import day9 from './day9.js';
import day10 from './day10.js';
import day11 from './day11.js';
import day12 from './day12.js';
import day13 from './day13.js';
import day14 from './day14.js';
import day15 from './day15.js';
import day16 from './day16.js';
import day17 from './day17.js';
import day18 from './day18.js';
import day19 from './day19.js';
import day20 from './day20.js';
import day21 from './day21.js';

// Export assessments object
export const assessments = {
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
  day9,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
  day19,
  day20,
  day21
};

// Helper function to get assessment for a day with mode support
export const getAssessment = (dayId, mode = 'quick') => {
  const assessment = assessments[dayId];
  if (!assessment) return null;

  // Filter sections based on mode
  let sections = assessment.sections;
  if (mode === 'quick') {
    // Quick mode: exclude fullModeOnly sections
    sections = assessment.sections.filter(section => !section.fullModeOnly);
  }
  // Full mode: include all sections

  // Get time limit based on mode
  const timeLimit = assessment.modes?.[mode]?.timeLimit || assessment.timeLimit;

  // If assessment has sections, flatten questions
  if (sections) {
    return {
      ...assessment,
      timeLimit,
      mode,
      questions: sections.flatMap(section => section.questions)
    };
  }

  return assessment;
};

// Helper function to get assessment with sections and mode support
export const getAssessmentWithSections = (dayId, mode = 'quick') => {
  const assessment = assessments[dayId];
  if (!assessment) return null;

  // Filter sections based on mode
  let sections = assessment.sections;
  if (mode === 'quick') {
    // Quick mode: exclude fullModeOnly sections
    sections = assessment.sections.filter(section => !section.fullModeOnly);
  }

  // Get time limit based on mode
  const timeLimit = assessment.modes?.[mode]?.timeLimit || assessment.timeLimit;

  return {
    ...assessment,
    sections,
    timeLimit,
    mode
  };
};

// Helper function to check if assessment has modes
export const hasAssessmentModes = (dayId) => {
  const assessment = assessments[dayId];
  return assessment && assessment.modes ? true : false;
};

// Helper function to get available modes for an assessment
export const getAssessmentModes = (dayId) => {
  const assessment = assessments[dayId];
  return assessment?.modes || null;
};

// Helper function to check if day has assessment
export const hasAssessment = (dayId) => {
  return assessments.hasOwnProperty(dayId);
};

// Calculate score
export const calculateScore = (answers, assessment) => {
  let totalPoints = 0;
  let earnedPoints = 0;

  assessment.questions.forEach((question, index) => {
    totalPoints += question.points;
    const userAnswer = answers[question.id];

    if (userAnswer !== undefined && userAnswer !== null) {
      if (question.type === 'mcq' || question.type === 'truefalse') {
        if (userAnswer === question.correctAnswer) {
          earnedPoints += question.points;
        }
      } else if (question.type === 'fillblank') {
        const acceptable = question.acceptableAnswers || [question.correctAnswer];
        const userAnswerNormalized = question.caseSensitive
          ? userAnswer.trim()
          : userAnswer.trim().toLowerCase();

        const isCorrect = acceptable.some(ans => {
          const ansNormalized = question.caseSensitive
            ? ans.trim()
            : ans.trim().toLowerCase();
          return userAnswerNormalized === ansNormalized;
        });

        if (isCorrect) {
          earnedPoints += question.points;
        }
      } else if (question.type === 'shortanswer') {
        // For short answer, check if minimum keywords are present
        const userAnswerLower = userAnswer.toLowerCase();
        const matchedKeywords = question.keywords.filter(keyword =>
          userAnswerLower.includes(keyword.toLowerCase())
        );

        if (matchedKeywords.length >= question.minKeywords) {
          earnedPoints += question.points;
        }
      }
    }
  });

  const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  const passed = percentage >= assessment.passingScore;

  return {
    earnedPoints,
    totalPoints,
    percentage,
    passed,
    grade: getGrade(percentage)
  };
};

// Get letter grade
const getGrade = (percentage) => {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
};

export default assessments;
