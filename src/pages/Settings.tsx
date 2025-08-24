import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Settings: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-md shadow-md text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">설정</h1>

      {/* 다크모드 토글 */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium">{isDarkMode ? '다크모드' : '라이트모드'}</span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-400 transition-colors"></div>
          <div
            className={`
        absolute left-0.5 top-0.5 w-5 h-5 bg-white dark:bg-gray-100 rounded-full shadow-md transform transition-transform
        ${isDarkMode ? 'translate-x-5' : ''}
      `}
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Settings;
