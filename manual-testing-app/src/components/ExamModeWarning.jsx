import React from 'react';
import { AlertCircle, AlertTriangle, XCircle } from 'lucide-react';

const ExamModeWarning = ({ violation, violationCount, onAcknowledge }) => {
  // Determine severity based on violation count
  const getSeverityConfig = (count) => {
    if (count >= 5) {
      return {
        icon: XCircle,
        bgColor: 'bg-red-900',
        textColor: 'text-red-600',
        borderColor: 'border-red-600',
        iconColor: 'text-red-600',
        title: 'Critical Warning!',
      };
    } else if (count >= 3) {
      return {
        icon: AlertTriangle,
        bgColor: 'bg-orange-900',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-600',
        iconColor: 'text-orange-600',
        title: 'Serious Warning!',
      };
    } else {
      return {
        icon: AlertCircle,
        bgColor: 'bg-yellow-900',
        textColor: 'text-yellow-600',
        borderColor: 'border-yellow-600',
        iconColor: 'text-yellow-600',
        title: 'Warning!',
      };
    }
  };

  const config = getSeverityConfig(violationCount);
  const IconComponent = config.icon;

  // Get user-friendly violation description
  const getViolationTitle = (type) => {
    const titles = {
      tab_switch: 'Tab Switch Detected',
      focus_loss: 'Window Focus Lost',
      fullscreen_exit: 'Fullscreen Mode Exited',
      context_menu: 'Context Menu Attempted',
      dev_tools_attempt: 'Developer Tools Attempted',
      copy_attempt: 'Copy Action Detected',
      paste_attempt: 'Paste Action Detected',
      page_reload: 'Page Reload Detected',
    };
    return titles[type] || 'Policy Violation Detected';
  };

  return (
    <div className={`fixed inset-0 ${config.bgColor} bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm`}>
      <div className={`bg-white rounded-lg shadow-2xl p-8 max-w-md w-full border-4 ${config.borderColor} animate-pulse-border`}>
        <div className="text-center">
          <IconComponent className={`w-16 h-16 ${config.iconColor} mx-auto mb-4 animate-bounce`} />

          <h2 className={`text-2xl font-bold ${config.textColor} mb-2`}>
            {config.title}
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {violation ? getViolationTitle(violation.type) : 'Exam Policy Violation'}
          </h3>

          {violation && (
            <p className="text-gray-700 mb-4 text-base">
              {violation.description}
            </p>
          )}

          <div className={`bg-gray-100 rounded-lg p-4 mb-6 border-l-4 ${config.borderColor}`}>
            <p className="text-sm text-gray-600 mb-2">
              This violation has been logged and recorded as part of your exam record.
            </p>
            <p className="text-sm font-semibold text-gray-800">
              Multiple violations may affect your assessment validity.
            </p>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 mb-6 border ${config.borderColor}`}>
            <span className="text-sm font-medium text-gray-600">Total Violations:</span>
            <span className={`text-2xl font-bold ${config.textColor}`}>{violationCount}</span>
          </div>

          {violationCount >= 5 && (
            <div className="bg-red-100 border-2 border-red-600 rounded-lg p-3 mb-6">
              <p className="text-red-800 font-bold text-sm">
                ⚠️ Excessive violations detected. Your assessment may be flagged for review.
              </p>
            </div>
          )}

          <button
            onClick={onAcknowledge}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 ${
              violationCount >= 5
                ? 'bg-red-600 hover:bg-red-700'
                : violationCount >= 3
                ? 'bg-orange-600 hover:bg-orange-700'
                : 'bg-blue-600 hover:bg-blue-700'
            } shadow-lg`}
          >
            I Understand - Return to Exam
          </button>

          <p className="text-xs text-gray-500 mt-4">
            The exam timer is paused while this warning is displayed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamModeWarning;
