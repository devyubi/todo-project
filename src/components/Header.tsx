import React from 'react';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <header className="bg-[#A1866F] dark:bg-[#3C2F2F] border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-5 gap-4">
        {/* 로고 */}
        <h1 className="text-2xl font-bold tracking-tight">
          <NavLink to="/">
            <img
              src={isDarkMode ? '/ddodo_dark.png' : '/ddodo_light.png'}
              alt="로고"
              className="w-24 h-8"
            />
          </NavLink>
        </h1>

        {/* 홈,읽기,등록,설정 */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4 text-sm text-gray-100 dark:text-gray-200">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              홈
            </NavLink>
            {/* <NavLink
              to="/todos/read"
              className={({ isActive }) => (isActive ? 'font-semibold' : '')}
            >
              읽기
            </NavLink> */}
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

          {/* 다크모드 */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md bg-[#7B5E4F] dark:bg-[#D9CBBE] dark:text-gray-900 text-white hover:opacity-90 transition-colors text-sm"
          >
            <span className="dark:hidden">다크모드</span>
            <span className="hidden dark:inline">라이트모드</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
