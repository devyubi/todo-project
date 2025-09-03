import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-[#452c08] text-white">
      <div className="flex flex-col items-center animate-fadeIn">
        <h1 className="text-5xl font-bold tracking-widest">Todo</h1>
        <p className="mt-4 text-lg opacity-80">할 일 서비스 앱</p>
        {/* 점 3개 */}
        <div className="flex space-x-1 mt-6">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
