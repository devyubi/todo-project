import { NavLink } from 'react-router-dom';

const Header = () => {
  // ts 자리
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      {/* 상단메뉴 */}
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="gap-4 container-app flex items-center py-6">
          <h1 className="flex-1 text-2xl font-bold tracking-tighter">
            <img
              src={
                document.documentElement.classList.contains('dark')
                  ? '/ddodo_dark.png'
                  : '/ddodo_light.png'
              }
              alt="로고"
              className="w-20 h-8"
            />
          </h1>
          <nav className="flex items-center gap-2 text-sm">
            <NavLink to="/">홈</NavLink>
            <NavLink to="/todos/read">읽기</NavLink>
            <NavLink to="/todos/write">등록</NavLink>
            <NavLink to="/settings">설정</NavLink>
          </nav>
          <button
            onClick={toggleDark}
            className="rounded-md bg-black px-3 py-1 text-white hover:opacity-90 text-sm dark:bg-black dark:text-white"
          >
            <span className="dark:hidden">다크모드</span>
            <span className="hidden dark:inline">라이트모드</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
