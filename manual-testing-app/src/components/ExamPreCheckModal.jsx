import React, { useState } from 'react';
import { Shield, CheckCircle2, XCircle, Clock, Monitor, AlertTriangle } from 'lucide-react';

const ExamPreCheckModal = ({ assessment, onStart, onCancel }) => {
  const [agreements, setAgreements] = useState({
    fullscreen: false,
    monitoring: false,
    environment: false,
    noHelp: false,
  });

  const allAgreed = Object.values(agreements).every((v) => v);

  const handleCheckboxChange = (key) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const examMode = assessment.modes?.exam || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Exam Mode - Pre-Check</h2>
          </div>
          <p className="text-blue-100">
            {assessment.title || 'Assessment'}
          </p>
        </div>

        <div className="p-6">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-1">Important: Exam Simulation Mode</h3>
                <p className="text-sm text-yellow-800">
                  This assessment will run in a monitored, full-screen environment that simulates real certification exams.
                  Your actions will be monitored and logged.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-4 text-lg">Exam Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Time Limit</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{examMode.timeLimit || assessment.timeLimit} min</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Monitor className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Questions</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{examMode.questionCount || 'All'}</p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-lg">Before Starting the Exam</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Close all other browser tabs and applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Ensure stable internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Grant fullscreen permission when prompted</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Disable all notifications and alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Find a quiet environment free from distractions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Have pen and paper ready (if allowed)</span>
              </li>
            </ul>
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-lg">Monitoring & Rules</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-3 font-semibold">The following will be monitored and logged:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Switching tabs or minimizing the window</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Losing window focus or clicking outside the exam</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Exiting fullscreen mode</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Attempting to open developer tools or context menus</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Page reloads or navigation attempts</span>
              </li>
            </ul>
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-lg">Required Acknowledgments</h3>
          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={agreements.fullscreen}
                onChange={() => handleCheckboxChange('fullscreen')}
                className="w-5 h-5 text-blue-600 mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-700 flex-1">
                I agree to complete the exam in <strong>fullscreen mode</strong> and understand that exiting fullscreen will be logged as a violation.
              </span>
            </label>

            <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={agreements.monitoring}
                onChange={() => handleCheckboxChange('monitoring')}
                className="w-5 h-5 text-blue-600 mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-700 flex-1">
                I understand that <strong>tab switches, focus loss, and other activities will be monitored and logged</strong> during this exam.
              </span>
            </label>

            <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={agreements.environment}
                onChange={() => handleCheckboxChange('environment')}
                className="w-5 h-5 text-blue-600 mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-700 flex-1">
                I have <strong>prepared a suitable testing environment</strong> free from distractions and closed all unnecessary applications.
              </span>
            </label>

            <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={agreements.noHelp}
                onChange={() => handleCheckboxChange('noHelp')}
                className="w-5 h-5 text-blue-600 mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-700 flex-1">
                I agree to complete this exam <strong>without external help, references, or AI assistance</strong>, relying only on my own knowledge.
              </span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-6 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onStart}
              disabled={!allAgreed}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-all ${
                allAgreed
                  ? 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {allAgreed ? 'Start Exam' : 'Please Accept All Terms'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPreCheckModal;
