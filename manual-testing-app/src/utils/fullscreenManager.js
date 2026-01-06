/**
 * Fullscreen Manager for Exam Mode
 * Handles fullscreen API with cross-browser support
 * and monitors fullscreen state changes
 */

export class FullscreenManager {
  constructor(onExit = null, onError = null) {
    this.onExit = onExit;
    this.onError = onError;
    this.isFullscreen = false;
    this.element = null;
    this.exitHandlers = [];
    this.supported = this.isFullscreenSupported();
  }

  /**
   * Check if Fullscreen API is supported
   * @returns {Boolean}
   */
  isFullscreenSupported() {
    return !!(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }

  /**
   * Request fullscreen mode
   * @param {HTMLElement} element - Element to make fullscreen (defaults to document.documentElement)
   * @returns {Promise<Boolean>} - Success status
   */
  async requestFullscreen(element = document.documentElement) {
    if (!this.supported) {
      console.warn('Fullscreen API is not supported in this browser');
      if (this.onError) {
        this.onError(new Error('Fullscreen not supported'));
      }
      return false;
    }

    this.element = element;

    try {
      // Try different vendor prefixes
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      } else {
        throw new Error('No fullscreen method available');
      }

      this.isFullscreen = true;
      this.setupExitListeners();
      return true;
    } catch (error) {
      console.error('Fullscreen request failed:', error);
      if (this.onError) {
        this.onError(error);
      }
      return false;
    }
  }

  /**
   * Setup listeners for fullscreen exit events
   */
  setupExitListeners() {
    const handler = () => {
      const isCurrentlyFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isCurrentlyFullscreen && this.isFullscreen) {
        this.isFullscreen = false;
        if (this.onExit) {
          this.onExit();
        }
      } else if (isCurrentlyFullscreen) {
        this.isFullscreen = true;
      }
    };

    // Add all vendor-prefixed events
    const events = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'msfullscreenchange',
    ];

    events.forEach((event) => {
      document.addEventListener(event, handler);
      this.exitHandlers.push({ event, handler });
    });
  }

  /**
   * Exit fullscreen mode
   * @returns {Promise<Boolean>}
   */
  async exitFullscreen() {
    if (!this.isFullscreen) {
      return true;
    }

    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }

      this.isFullscreen = false;
      return true;
    } catch (error) {
      console.error('Exit fullscreen failed:', error);
      if (this.onError) {
        this.onError(error);
      }
      return false;
    }
  }

  /**
   * Toggle fullscreen mode
   * @param {HTMLElement} element
   * @returns {Promise<Boolean>}
   */
  async toggle(element = document.documentElement) {
    if (this.isFullscreen) {
      return await this.exitFullscreen();
    } else {
      return await this.requestFullscreen(element);
    }
  }

  /**
   * Get current fullscreen element
   * @returns {HTMLElement|null}
   */
  getFullscreenElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null
    );
  }

  /**
   * Check if currently in fullscreen
   * @returns {Boolean}
   */
  isCurrentlyFullscreen() {
    return !!this.getFullscreenElement();
  }

  /**
   * Cleanup event listeners
   */
  cleanup() {
    this.exitHandlers.forEach(({ event, handler }) => {
      document.removeEventListener(event, handler);
    });
    this.exitHandlers = [];
  }

  /**
   * Get fullscreen info for debugging
   * @returns {Object}
   */
  getInfo() {
    return {
      supported: this.supported,
      isFullscreen: this.isFullscreen,
      element: this.element,
      currentFullscreenElement: this.getFullscreenElement(),
      fullscreenEnabled:
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled,
    };
  }
}

/**
 * Utility function to request fullscreen with error handling
 * @param {HTMLElement} element
 * @param {Function} onExit
 * @param {Function} onError
 * @returns {FullscreenManager}
 */
export async function enterFullscreen(element, onExit, onError) {
  const manager = new FullscreenManager(onExit, onError);
  await manager.requestFullscreen(element);
  return manager;
}

/**
 * Check if device likely supports fullscreen well
 * (Desktop browsers generally have better support)
 * @returns {Boolean}
 */
export function isFullscreenRecommended() {
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Check if fullscreen API available
  const hasAPI = !!(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  );

  // Recommend fullscreen on desktop with API support
  return hasAPI && !isMobile;
}

export default FullscreenManager;
