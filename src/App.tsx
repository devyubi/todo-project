import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/todo/TodoProvider';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[#fdf9f5] dark:bg-[#211d1c] text-[#5A4B41] dark:text-[#EDE4DC] transition-colors duration-300">
            <Header />

            <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/" element={<div>홈</div>} />
                <Route path="/todos/*" element={<TodoPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
