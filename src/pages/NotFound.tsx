import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5EFE7] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6 text-xl">
        <strong>페이지를 찾을 수 없습니다.</strong>
      </p>
      <NavLink
        to="/"
        className="px-6 py-2 rounded-md bg-[#8C7561] text-white hover:bg-[#5A4B41] dark:bg-[#EDE4DC] dark:text-[#3C3735] dark:hover:bg-[#FFD9D9] transition-colors"
      >
        홈으로 돌아가기
      </NavLink>
    </div>
  );
};

export default NotFound;
