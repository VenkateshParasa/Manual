import { useState, useEffect, useCallback, useRef } from 'react';
import { FullscreenManager } from '../utils/fullscreenManager';
import { ExamMonitor, VIOLATION_TYPES } from '../utils/examMonitor';

/**
 * Custom hook for managing exam mode state and behavior
 * @param {Boolean} isExamMode - Whether assessment is in exam mode
 * @param {Function} onViolation - Callback when violation occurs
 * @param {Object} settings - Exam mode settings
 * @returns {Object} - Exam mode state and controls
 */
export function useExamMode(isExamMode, onViolation, settings = {}) {
  const [examState, setExamState] = useState({
    active: false,
    fullscreenActive: false,
    violations: [],
    showWarning: false,
    currentViolation: null,
    isMonitoring: false,
  });

  const fullscreenManagerRef = useRef(null);
  const examMonitorRef = useRef(null);
  const containerRef = useRef(null);

  /**
   * Handle violation detected by monitor
   */
  const handleViolation = useCallback(
    (violation) => {
      const violationCount = examState.violations.length + 1;

      setExamState((prev) => ({
        ...prev,
        violations: [...prev.violations, violation],
        showWarning: true,
        currentViolation: {
          ...violation,
          count: violationCount,
        },
      }));

      if (onViolation) {
        onViolation(violation, violationCount);
      }
    },
    [examState.violations.length, onViolation]
  );

  /**
   * Handle fullscreen exit
   */
  const handleFullscreenExit = useCallback(() => {
    setExamState((prev) => ({ ...prev, fullscreenActive: false }));

    if (examMonitorRef.current) {
      examMonitorRef.current.addViolation(
        VIOLATION_TYPES.FULLSCREEN_EXIT,
        'Exited fullscreen mode'
      );
    }
  }, []);

  /**
   * Initialize exam mode
   */
  const initialize = useCallback(
    async (container) => {
      if (!isExamMode) return false;

      containerRef.current = container || document.documentElement;

      try {
        // Initialize fullscreen manager
        fullscreenManagerRef.current = new FullscreenManager(
          handleFullscreenExit,
          (error) => {
            console.error('Fullscreen error:', error);
          }
        );

        // Request fullscreen
        const fullscreenSuccess = await fullscreenManagerRef.current.requestFullscreen(
          containerRef.current
        );

        if (!fullscreenSuccess) {
          console.warn('Fullscreen not supported or denied');
        }

        // Initialize exam monitor
        examMonitorRef.current = new ExamMonitor(handleViolation, {
          detectTabSwitch: true,
          detectFocusLoss: true,
          preventContextMenu: true,
          preventDevTools: true,
          detectCopyPaste: settings.detectCopyPaste || false,
          maxViolations: settings.maxViolations || 100,
        });

        examMonitorRef.current.startMonitoring();

        setExamState((prev) => ({
          ...prev,
          active: true,
          fullscreenActive: fullscreenSuccess,
          isMonitoring: true,
        }));

        return true;
      } catch (error) {
        console.error('Failed to initialize exam mode:', error);
        return false;
      }
    },
    [isExamMode, handleFullscreenExit, handleViolation, settings]
  );

  /**
   * Cleanup exam mode
   */
  const cleanup = useCallback(() => {
    if (examMonitorRef.current) {
      examMonitorRef.current.stopMonitoring();
      examMonitorRef.current = null;
    }

    if (fullscreenManagerRef.current) {
      fullscreenManagerRef.current.exitFullscreen();
      fullscreenManagerRef.current.cleanup();
      fullscreenManagerRef.current = null;
    }

    setExamState({
      active: false,
      fullscreenActive: false,
      violations: [],
      showWarning: false,
      currentViolation: null,
      isMonitoring: false,
    });
  }, []);

  /**
   * Acknowledge violation warning
   */
  const acknowledgeWarning = useCallback(() => {
    setExamState((prev) => ({
      ...prev,
      showWarning: false,
      currentViolation: null,
    }));

    // Try to re-enter fullscreen if it was exited
    if (fullscreenManagerRef.current && !examState.fullscreenActive) {
      fullscreenManagerRef.current.requestFullscreen(containerRef.current);
    }
  }, [examState.fullscreenActive]);

  /**
   * Get violations summary
   */
  const getViolationsSummary = useCallback(() => {
    if (!examMonitorRef.current) {
      return {
        total: examState.violations.length,
        byType: {},
        violations: examState.violations,
      };
    }

    return examMonitorRef.current.getViolationsSummary();
  }, [examState.violations]);

  /**
   * Get exam data for storage
   */
  const getExamData = useCallback(() => {
    return {
      fullscreenMaintained: examState.fullscreenActive,
      violations: examState.violations,
      violationSummary: getViolationsSummary(),
      startedFullscreen: examState.fullscreenActive,
      completedFullscreen: fullscreenManagerRef.current?.isCurrentlyFullscreen() || false,
    };
  }, [examState.violations, examState.fullscreenActive, getViolationsSummary]);

  /**
   * Manually add a violation (for special cases like page reload)
   */
  const addViolation = useCallback((type, description) => {
    if (examMonitorRef.current) {
      examMonitorRef.current.addViolation(type, description);
    }
  }, []);

  /**
   * Check if in fullscreen
   */
  const isFullscreen = useCallback(() => {
    return fullscreenManagerRef.current?.isCurrentlyFullscreen() || false;
  }, []);

  /**
   * Request fullscreen again
   */
  const requestFullscreen = useCallback(async () => {
    if (fullscreenManagerRef.current) {
      const success = await fullscreenManagerRef.current.requestFullscreen(
        containerRef.current
      );
      if (success) {
        setExamState((prev) => ({ ...prev, fullscreenActive: true }));
      }
      return success;
    }
    return false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  // Save exam state to sessionStorage for recovery
  useEffect(() => {
    if (examState.active && isExamMode) {
      sessionStorage.setItem(
        'examModeState',
        JSON.stringify({
          violations: examState.violations,
          startedAt: new Date().toISOString(),
        })
      );
    }
  }, [examState.violations, examState.active, isExamMode]);

  return {
    // State
    isActive: examState.active,
    isFullscreen: examState.fullscreenActive,
    violations: examState.violations,
    showWarning: examState.showWarning,
    currentViolation: examState.currentViolation,
    isMonitoring: examState.isMonitoring,
    violationCount: examState.violations.length,

    // Actions
    initialize,
    cleanup,
    acknowledgeWarning,
    addViolation,
    requestFullscreen,

    // Getters
    getViolationsSummary,
    getExamData,
    isFullscreen: isFullscreen,

    // Refs (for advanced use)
    containerRef,
  };
}

export default useExamMode;
