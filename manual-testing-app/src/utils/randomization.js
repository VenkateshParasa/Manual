/**
 * Randomization Utilities for Assessment System
 * Provides functions to shuffle questions, options, and sections
 * while maintaining consistent question IDs for answer storage
 */

/**
 * Fisher-Yates shuffle algorithm for unbiased randomization
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled copy of the array
 */
export function shuffleArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return array;
  }

  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Randomize questions within each section
 * @param {Array} sections - Assessment sections
 * @param {Object} options - Randomization options
 * @returns {Array} - Sections with randomized questions
 */
export function randomizeQuestions(sections, options = {}) {
  const { preserveQuestionIds = true, seed = null } = options;

  if (!Array.isArray(sections) || sections.length === 0) {
    return sections;
  }

  return sections.map((section) => {
    if (!section.questions || section.questions.length === 0) {
      return section;
    }

    return {
      ...section,
      questions: shuffleArray(section.questions),
      originalOrder: preserveQuestionIds
        ? section.questions.map((q) => q.id)
        : null,
    };
  });
}

/**
 * Randomize MCQ options and remap correctAnswer index
 * @param {Object} question - Question object
 * @returns {Object} - Question with shuffled options
 */
export function randomizeOptions(question) {
  // Only randomize MCQ questions
  if (question.type !== 'mcq' || !question.options || question.options.length === 0) {
    return question;
  }

  // Create indexed array to track original positions
  const indexed = question.options.map((opt, idx) => ({ opt, idx }));
  const shuffled = shuffleArray(indexed);

  // Remap the correctAnswer to the new position
  const newCorrectAnswer = shuffled.findIndex(
    (item) => item.idx === question.correctAnswer
  );

  return {
    ...question,
    options: shuffled.map((item) => item.opt),
    correctAnswer: newCorrectAnswer,
    originalOrder: indexed.map((item) => item.idx),
  };
}

/**
 * Randomize section order
 * @param {Array} sections - Assessment sections
 * @param {Boolean} preserveSectionOrder - Whether to keep sections in order
 * @returns {Array} - Shuffled sections or original if preserved
 */
export function randomizeSections(sections, preserveSectionOrder = false) {
  if (preserveSectionOrder || !Array.isArray(sections) || sections.length === 0) {
    return sections;
  }

  return shuffleArray(sections);
}

/**
 * Comprehensive randomization for entire assessment
 * @param {Object} assessment - Assessment object with sections
 * @param {Object} settings - Randomization settings
 * @returns {Object} - Randomized assessment
 */
export function randomizeAssessment(assessment, settings = {}) {
  const {
    randomizeQuestionOrder = true,
    randomizeOptionOrder = true,
    randomizeSectionOrder = false,
  } = settings;

  if (!assessment || !assessment.sections) {
    return assessment;
  }

  let { sections } = assessment;

  // Randomize section order if enabled
  if (randomizeSectionOrder) {
    sections = randomizeSections(sections);
  }

  // Randomize questions within sections if enabled
  if (randomizeQuestionOrder) {
    sections = randomizeQuestions(sections);
  }

  // Randomize MCQ options if enabled
  if (randomizeOptionOrder) {
    sections = sections.map((section) => ({
      ...section,
      questions: section.questions.map((question) => randomizeOptions(question)),
    }));
  }

  return {
    ...assessment,
    sections,
    randomizationApplied: {
      questionOrder: randomizeQuestionOrder,
      optionOrder: randomizeOptionOrder,
      sectionOrder: randomizeSectionOrder,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * Get default randomization settings based on mode
 * @param {String} mode - Assessment mode (quick/full/exam)
 * @returns {Object} - Randomization settings
 */
export function getDefaultRandomizationSettings(mode) {
  switch (mode) {
    case 'exam':
      return {
        randomizeQuestionOrder: true,
        randomizeOptionOrder: true,
        randomizeSectionOrder: false,
      };
    case 'full':
    case 'quick':
    default:
      return {
        randomizeQuestionOrder: false,
        randomizeOptionOrder: false,
        randomizeSectionOrder: false,
      };
  }
}

/**
 * Validate that randomization preserved question integrity
 * @param {Array} original - Original questions
 * @param {Array} randomized - Randomized questions
 * @returns {Boolean} - True if all questions present with same IDs
 */
export function validateRandomization(original, randomized) {
  if (!Array.isArray(original) || !Array.isArray(randomized)) {
    return false;
  }

  if (original.length !== randomized.length) {
    return false;
  }

  const originalIds = new Set(original.map((q) => q.id));
  const randomizedIds = new Set(randomized.map((q) => q.id));

  return originalIds.size === randomizedIds.size &&
         [...originalIds].every((id) => randomizedIds.has(id));
}
