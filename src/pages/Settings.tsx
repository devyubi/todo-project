import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Settings: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-md shadow-md text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">설정</h1>
      <div className="flex items-center justify-between">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-md bg-gray-800 text-white hover:opacity-90 dark:bg-gray-200 dark:text-gray-900 text-sm"
        >
          {isDarkMode ? '라이트모드' : '다크모드'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
