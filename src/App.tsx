import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/todo/TodoProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />

            <main className="flex-1 container-app px-4 py-6">
              <Routes>
                <Route path="/" element={<div>HOME</div>} />
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
