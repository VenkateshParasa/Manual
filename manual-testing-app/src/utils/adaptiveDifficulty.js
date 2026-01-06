/**
 * Adaptive Difficulty Engine for Assessment System
 * Implements sliding window with streak detection algorithm
 * to dynamically adjust question difficulty based on user performance
 */

const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];

export class AdaptiveDifficultyEngine {
  constructor(questions, settings = {}) {
    this.allQuestions = questions || [];
    this.settings = {
      enabled: settings.enabled !== undefined ? settings.enabled : true,
      startingDifficulty: settings.startingDifficulty || 'medium',
      adjustmentThreshold: settings.adjustmentThreshold || 2,
      windowSize: settings.windowSize || 3,
      minQuestionsPerDifficulty: settings.minQuestionsPerDifficulty || 2,
    };

    this.currentDifficulty = this.settings.startingDifficulty;
    this.performanceHistory = [];
    this.usedQuestionIds = new Set();
    this.streakCounter = 0;
    this.difficultyTransitions = [this.currentDifficulty];
  }

  /**
   * Get the next question based on current difficulty
   * @returns {Object|null} - Next question or null if none available
   */
  getNextQuestion() {
    if (!this.settings.enabled) {
      return this.getRandomUnusedQuestion();
    }

    // Try to get question from current difficulty
    let question = this.getQuestionByDifficulty(this.currentDifficulty);

    // If no questions available at current difficulty, try adjacent difficulties
    if (!question) {
      question = this.getFallbackQuestion();
    }

    if (question) {
      this.usedQuestionIds.add(question.id);
    }

    return question;
  }

  /**
   * Get a random unused question (for non-adaptive mode)
   * @returns {Object|null}
   */
  getRandomUnusedQuestion() {
    const unused = this.allQuestions.filter(
      (q) => !this.usedQuestionIds.has(q.id)
    );

    if (unused.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * unused.length);
    const question = unused[randomIndex];
    this.usedQuestionIds.add(question.id);
    return question;
  }

  /**
   * Get question by specific difficulty
   * @param {String} difficulty - Difficulty level
   * @returns {Object|null}
   */
  getQuestionByDifficulty(difficulty) {
    const available = this.getAvailableQuestions(difficulty);

    if (available.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  }

  /**
   * Get available questions at specific difficulty
   * @param {String} difficulty - Difficulty level
   * @returns {Array}
   */
  getAvailableQuestions(difficulty) {
    return this.allQuestions.filter(
      (q) =>
        this.inferDifficulty(q) === difficulty && !this.usedQuestionIds.has(q.id)
    );
  }

  /**
   * Get fallback question when current difficulty exhausted
   * @returns {Object|null}
   */
  getFallbackQuestion() {
    const currentIndex = DIFFICULTY_LEVELS.indexOf(this.currentDifficulty);

    // Try adjacent difficulties (closer first)
    for (let offset = 1; offset <= 2; offset++) {
      // Try higher difficulty
      if (currentIndex + offset < DIFFICULTY_LEVELS.length) {
        const higherDifficulty = DIFFICULTY_LEVELS[currentIndex + offset];
        const question = this.getQuestionByDifficulty(higherDifficulty);
        if (question) return question;
      }

      // Try lower difficulty
      if (currentIndex - offset >= 0) {
        const lowerDifficulty = DIFFICULTY_LEVELS[currentIndex - offset];
        const question = this.getQuestionByDifficulty(lowerDifficulty);
        if (question) return question;
      }
    }

    return null;
  }

  /**
   * Record answer and adjust difficulty based on performance
   * @param {String} questionId - Question ID
   * @param {Boolean} correct - Whether answer was correct
   * @param {Number} timeSpent - Time spent in seconds
   * @returns {Object} - Performance record
   */
  recordAnswer(questionId, correct, timeSpent = 0) {
    const question = this.allQuestions.find((q) => q.id === questionId);
    const difficulty = question ? this.inferDifficulty(question) : this.currentDifficulty;

    const record = {
      questionId,
      difficulty,
      correct,
      timeSpent,
      timestamp: new Date().toISOString(),
    };

    this.performanceHistory.push(record);

    if (this.settings.enabled) {
      this.updateStreakCounter(correct);
      this.adjustDifficulty();
    }

    return record;
  }

  /**
   * Update streak counter based on correctness
   * @param {Boolean} correct - Whether answer was correct
   */
  updateStreakCounter(correct) {
    if (correct) {
      this.streakCounter++;
    } else {
      this.streakCounter = 0;
    }
  }

  /**
   * Adjust difficulty based on performance history
   */
  adjustDifficulty() {
    const { adjustmentThreshold, windowSize, minQuestionsPerDifficulty } = this.settings;

    // Need minimum number of answers before adjusting
    if (this.performanceHistory.length < minQuestionsPerDifficulty) {
      return;
    }

    const currentIndex = DIFFICULTY_LEVELS.indexOf(this.currentDifficulty);

    // Check if should increase difficulty (consecutive correct answers)
    if (this.streakCounter >= adjustmentThreshold && currentIndex < DIFFICULTY_LEVELS.length - 1) {
      // Check if enough questions available at higher difficulty
      const nextDifficulty = DIFFICULTY_LEVELS[currentIndex + 1];
      const availableCount = this.getAvailableQuestions(nextDifficulty).length;

      if (availableCount >= minQuestionsPerDifficulty) {
        this.currentDifficulty = nextDifficulty;
        this.difficultyTransitions.push(this.currentDifficulty);
        this.streakCounter = 0;
        return;
      }
    }

    // Check if should decrease difficulty (recent mistakes)
    const recentAnswers = this.performanceHistory.slice(-windowSize);
    if (recentAnswers.length >= windowSize) {
      const incorrectCount = recentAnswers.filter((r) => !r.correct).length;

      // If 2 or more of last 3 incorrect, decrease difficulty
      if (incorrectCount >= 2 && currentIndex > 0) {
        const previousDifficulty = DIFFICULTY_LEVELS[currentIndex - 1];
        const availableCount = this.getAvailableQuestions(previousDifficulty).length;

        if (availableCount >= minQuestionsPerDifficulty) {
          this.currentDifficulty = previousDifficulty;
          this.difficultyTransitions.push(this.currentDifficulty);
          this.streakCounter = 0;
        }
      }
    }
  }

  /**
   * Infer difficulty from question if not explicitly set
   * @param {Object} question - Question object
   * @returns {String} - Difficulty level
   */
  inferDifficulty(question) {
    if (question.difficulty) {
      return question.difficulty;
    }

    // Infer from points
    const points = question.points || 5;
    if (points <= 3) return 'easy';
    if (points >= 7) return 'hard';
    return 'medium';
  }

  /**
   * Get current difficulty level
   * @returns {String}
   */
  getCurrentDifficulty() {
    return this.currentDifficulty;
  }

  /**
   * Get performance statistics
   * @returns {Object}
   */
  getStatistics() {
    if (this.performanceHistory.length === 0) {
      return {
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        accuracy: 0,
        avgTimePerQuestion: 0,
        byDifficulty: {},
        difficultyProgression: this.difficultyTransitions,
      };
    }

    const totalQuestions = this.performanceHistory.length;
    const correctAnswers = this.performanceHistory.filter((r) => r.correct).length;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const accuracy = (correctAnswers / totalQuestions) * 100;

    const totalTime = this.performanceHistory.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTimePerQuestion = totalTime / totalQuestions;

    // Stats by difficulty
    const byDifficulty = DIFFICULTY_LEVELS.reduce((acc, level) => {
      const levelAnswers = this.performanceHistory.filter((r) => r.difficulty === level);
      const levelCorrect = levelAnswers.filter((r) => r.correct).length;

      acc[level] = {
        total: levelAnswers.length,
        correct: levelCorrect,
        incorrect: levelAnswers.length - levelCorrect,
        accuracy: levelAnswers.length > 0 ? (levelCorrect / levelAnswers.length) * 100 : 0,
      };

      return acc;
    }, {});

    return {
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      accuracy: Math.round(accuracy * 10) / 10,
      avgTimePerQuestion: Math.round(avgTimePerQuestion * 10) / 10,
      byDifficulty,
      difficultyProgression: this.difficultyTransitions,
      currentDifficulty: this.currentDifficulty,
      startedAt: this.settings.startingDifficulty,
    };
  }

  /**
   * Get difficulty progression for visualization
   * @returns {Object}
   */
  getDifficultyProgression() {
    return {
      started: this.settings.startingDifficulty,
      ended: this.currentDifficulty,
      transitions: this.difficultyTransitions,
      transitionCount: this.difficultyTransitions.length - 1,
    };
  }

  /**
   * Get performance history
   * @returns {Array}
   */
  getPerformanceHistory() {
    return [...this.performanceHistory];
  }

  /**
   * Reset engine state (for retakes)
   */
  reset() {
    this.currentDifficulty = this.settings.startingDifficulty;
    this.performanceHistory = [];
    this.usedQuestionIds.clear();
    this.streakCounter = 0;
    this.difficultyTransitions = [this.currentDifficulty];
  }

  /**
   * Check if there are more questions available
   * @returns {Boolean}
   */
  hasMoreQuestions() {
    return this.usedQuestionIds.size < this.allQuestions.length;
  }

  /**
   * Get count of remaining questions
   * @returns {Number}
   */
  getRemainingQuestionsCount() {
    return this.allQuestions.length - this.usedQuestionIds.size;
  }

  /**
   * Get questions by difficulty distribution
   * @returns {Object}
   */
  getQuestionDistribution() {
    return DIFFICULTY_LEVELS.reduce((acc, level) => {
      const questions = this.allQuestions.filter(
        (q) => this.inferDifficulty(q) === level
      );
      acc[level] = {
        total: questions.length,
        used: questions.filter((q) => this.usedQuestionIds.has(q.id)).length,
        remaining: questions.filter((q) => !this.usedQuestionIds.has(q.id)).length,
      };
      return acc;
    }, {});
  }
}

/**
 * Create adaptive difficulty engine from assessment
 * @param {Object} assessment - Assessment object
 * @param {String} mode - Assessment mode
 * @returns {AdaptiveDifficultyEngine}
 */
export function createAdaptiveEngine(assessment, mode = 'quick') {
  if (!assessment) return null;

  // Flatten questions from all sections
  const allQuestions = [];
  if (assessment.sections) {
    assessment.sections.forEach((section) => {
      if (section.questions) {
        allQuestions.push(...section.questions);
      }
    });
  }

  // Get adaptive settings
  const settings = assessment.adaptiveSettings || {
    enabled: mode === 'exam', // Enable by default for exam mode
    startingDifficulty: 'medium',
  };

  return new AdaptiveDifficultyEngine(allQuestions, settings);
}

export default AdaptiveDifficultyEngine;
