/**
 * Exam Monitor for Violation Detection
 * Monitors user behavior during exam mode and logs violations
 * including tab switches, focus loss, and prohibited actions
 */

export const VIOLATION_TYPES = {
  TAB_SWITCH: 'tab_switch',
  FOCUS_LOSS: 'focus_loss',
  FULLSCREEN_EXIT: 'fullscreen_exit',
  CONTEXT_MENU: 'context_menu',
  DEV_TOOLS: 'dev_tools_attempt',
  COPY: 'copy_attempt',
  PASTE: 'paste_attempt',
  PAGE_RELOAD: 'page_reload',
};

export class ExamMonitor {
  constructor(onViolation = null, settings = {}) {
    this.onViolation = onViolation;
    this.settings = {
      detectTabSwitch: settings.detectTabSwitch !== undefined ? settings.detectTabSwitch : true,
      detectFocusLoss: settings.detectFocusLoss !== undefined ? settings.detectFocusLoss : true,
      preventContextMenu: settings.preventContextMenu !== undefined ? settings.preventContextMenu : true,
      preventDevTools: settings.preventDevTools !== undefined ? settings.preventDevTools : true,
      detectCopyPaste: settings.detectCopyPaste !== undefined ? settings.detectCopyPaste : false,
      maxViolations: settings.maxViolations || 100,
    };

    this.violations = [];
    this.startTime = Date.now();
    this.isMonitoring = false;
    this.handlers = {};
  }

  /**
   * Start monitoring for violations
   */
  startMonitoring() {
    if (this.isMonitoring) {
      console.warn('Exam monitoring already started');
      return;
    }

    this.isMonitoring = true;
    this.startTime = Date.now();

    // Tab visibility changes
    if (this.settings.detectTabSwitch) {
      this.handlers.visibilitychange = this.handleVisibilityChange.bind(this);
      document.addEventListener('visibilitychange', this.handlers.visibilitychange);
    }

    // Window focus loss
    if (this.settings.detectFocusLoss) {
      this.handlers.blur = this.handleBlur.bind(this);
      window.addEventListener('blur', this.handlers.blur);
    }

    // Context menu (right-click)
    if (this.settings.preventContextMenu) {
      this.handlers.contextmenu = this.handleContextMenu.bind(this);
      document.addEventListener('contextmenu', this.handlers.contextmenu);
    }

    // Keyboard shortcuts (dev tools, etc.)
    if (this.settings.preventDevTools) {
      this.handlers.keydown = this.handleKeyDown.bind(this);
      document.addEventListener('keydown', this.handlers.keydown);
    }

    // Copy/Paste detection
    if (this.settings.detectCopyPaste) {
      this.handlers.copy = this.handleCopy.bind(this);
      this.handlers.paste = this.handlePaste.bind(this);
      document.addEventListener('copy', this.handlers.copy);
      document.addEventListener('paste', this.handlers.paste);
    }

    // Page reload/beforeunload
    this.handlers.beforeunload = this.handleBeforeUnload.bind(this);
    window.addEventListener('beforeunload', this.handlers.beforeunload);

    console.log('Exam monitoring started');
  }

  /**
   * Stop monitoring
   */
  stopMonitoring() {
    if (!this.isMonitoring) {
      return;
    }

    // Remove all event listeners
    if (this.handlers.visibilitychange) {
      document.removeEventListener('visibilitychange', this.handlers.visibilitychange);
    }
    if (this.handlers.blur) {
      window.removeEventListener('blur', this.handlers.blur);
    }
    if (this.handlers.contextmenu) {
      document.removeEventListener('contextmenu', this.handlers.contextmenu);
    }
    if (this.handlers.keydown) {
      document.removeEventListener('keydown', this.handlers.keydown);
    }
    if (this.handlers.copy) {
      document.removeEventListener('copy', this.handlers.copy);
    }
    if (this.handlers.paste) {
      document.removeEventListener('paste', this.handlers.paste);
    }
    if (this.handlers.beforeunload) {
      window.removeEventListener('beforeunload', this.handlers.beforeunload);
    }

    this.isMonitoring = false;
    this.handlers = {};

    console.log('Exam monitoring stopped');
  }

  /**
   * Handle visibility change (tab switch, minimize)
   */
  handleVisibilityChange() {
    if (document.hidden) {
      this.recordViolation(
        VIOLATION_TYPES.TAB_SWITCH,
        'Switched to another tab or minimized window'
      );
    }
  }

  /**
   * Handle window blur (focus loss)
   */
  handleBlur() {
    // Debounce to avoid false positives from dialogs
    setTimeout(() => {
      if (!document.hasFocus()) {
        this.recordViolation(
          VIOLATION_TYPES.FOCUS_LOSS,
          'Window lost focus'
        );
      }
    }, 100);
  }

  /**
   * Handle context menu (right-click)
   */
  handleContextMenu(e) {
    e.preventDefault();
    this.recordViolation(
      VIOLATION_TYPES.CONTEXT_MENU,
      'Attempted to open context menu'
    );
  }

  /**
   * Handle keyboard shortcuts
   */
  handleKeyDown(e) {
    // F12 - Developer Tools
    if (e.key === 'F12') {
      e.preventDefault();
      this.recordViolation(
        VIOLATION_TYPES.DEV_TOOLS,
        'Attempted to open developer tools (F12)'
      );
      return;
    }

    // Ctrl+Shift+I or Cmd+Option+I - Developer Tools
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      this.recordViolation(
        VIOLATION_TYPES.DEV_TOOLS,
        'Attempted to open developer tools (Ctrl+Shift+I)'
      );
      return;
    }

    // Ctrl+Shift+J or Cmd+Option+J - Console
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      this.recordViolation(
        VIOLATION_TYPES.DEV_TOOLS,
        'Attempted to open console (Ctrl+Shift+J)'
      );
      return;
    }

    // Ctrl+U or Cmd+U - View Source
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
      this.recordViolation(
        VIOLATION_TYPES.DEV_TOOLS,
        'Attempted to view page source (Ctrl+U)'
      );
      return;
    }

    // Ctrl+Shift+C or Cmd+Option+C - Inspect Element
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      this.recordViolation(
        VIOLATION_TYPES.DEV_TOOLS,
        'Attempted to inspect element (Ctrl+Shift+C)'
      );
      return;
    }
  }

  /**
   * Handle copy event
   */
  handleCopy() {
    this.recordViolation(
      VIOLATION_TYPES.COPY,
      'Copied content'
    );
  }

  /**
   * Handle paste event
   */
  handlePaste() {
    this.recordViolation(
      VIOLATION_TYPES.PASTE,
      'Pasted content'
    );
  }

  /**
   * Handle page reload/navigation
   */
  handleBeforeUnload(e) {
    this.recordViolation(
      VIOLATION_TYPES.PAGE_RELOAD,
      'Attempted to reload or navigate away from page'
    );
  }

  /**
   * Record a violation
   * @param {String} type - Violation type
   * @param {String} description - Violation description
   */
  recordViolation(type, description) {
    // Check max violations limit
    if (this.violations.length >= this.settings.maxViolations) {
      console.warn('Max violations reached, not recording more');
      return;
    }

    const violation = {
      type,
      description,
      timestamp: new Date().toISOString(),
      timeElapsed: Date.now() - this.startTime,
    };

    this.violations.push(violation);

    // Call callback if provided
    if (this.onViolation) {
      this.onViolation(violation, this.violations.length);
    }

    console.log('Violation recorded:', violation);
  }

  /**
   * Manually add a violation (e.g., fullscreen exit)
   * @param {String} type
   * @param {String} description
   */
  addViolation(type, description) {
    this.recordViolation(type, description);
  }

  /**
   * Get all violations
   * @returns {Array}
   */
  getViolations() {
    return [...this.violations];
  }

  /**
   * Get violations summary
   * @returns {Object}
   */
  getViolationsSummary() {
    const byType = this.violations.reduce((acc, v) => {
      acc[v.type] = (acc[v.type] || 0) + 1;
      return acc;
    }, {});

    return {
      total: this.violations.length,
      byType,
      violations: this.violations,
      monitoringDuration: Date.now() - this.startTime,
      startTime: this.startTime,
    };
  }

  /**
   * Clear all violations
   */
  clearViolations() {
    this.violations = [];
  }

  /**
   * Get monitoring status
   * @returns {Object}
   */
  getStatus() {
    return {
      isMonitoring: this.isMonitoring,
      violationsCount: this.violations.length,
      startTime: this.startTime,
      monitoringDuration: Date.now() - this.startTime,
      settings: this.settings,
    };
  }

  /**
   * Export violations as JSON
   * @returns {String}
   */
  exportViolations() {
    return JSON.stringify(this.getViolationsSummary(), null, 2);
  }
}

/**
 * Create and start exam monitor
 * @param {Function} onViolation
 * @param {Object} settings
 * @returns {ExamMonitor}
 */
export function startExamMonitoring(onViolation, settings) {
  const monitor = new ExamMonitor(onViolation, settings);
  monitor.startMonitoring();
  return monitor;
}

export default ExamMonitor;
