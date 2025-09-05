import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
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
    <div className="flex items-center justify-center h-screen bg-[#89725f]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* 아이콘 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <Users className="w-20 h-20 text-white" />
        </motion.div>

        {/* 로고 */}
        <h1 className="mt-6 text-5xl font-bold text-white tracking-widest">
          Ddo
          <span className="bg-gradient-to-r from-white to-[#A1866F] bg-clip-text text-transparent">
            do
          </span>
        </h1>

        {/* 서브 문구 */}
        <p className="mt-4 text-lg text-white opacity-80">
          새로운 출발, 새로운 시작, Ddodo 앱서비스와 함께
        </p>

        {/* 로딩 애니메이션 */}
        <motion.div
          className="mt-8 w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
