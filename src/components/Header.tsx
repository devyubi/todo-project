import React from 'react';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="container-app flex items-center justify-between py-6 gap-4">
        <h1 className="text-2xl font-bold tracking-tight">
          <img
            src={isDarkMode ? '/ddodo_dark.png' : '/ddodo_light.png'}
            alt="로고"
            className="w-24 h-8"
          />
        </h1>
        <nav className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
            홈
          </NavLink>
          <NavLink to="/todos/read" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
            읽기
          </NavLink>
          <NavLink
            to="/todos/write"
            className={({ isActive }) => (isActive ? 'font-semibold' : '')}
          >
            등록
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
            설정
          </NavLink>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-md bg-gray-800 text-white hover:opacity-90 dark:bg-gray-200 dark:text-gray-900 text-sm"
        >
          <span className="dark:hidden">다크모드</span>
          <span className="hidden dark:inline">라이트모드</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
