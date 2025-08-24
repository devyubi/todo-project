import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage';
import { TodoProvider } from './context/todo/TodoContext';
import Header from './components/Header';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import TodoWriteSection from './sections/TodoWriteSection';
import TodoDetailSection from './sections/TodoDetailSection';
import TodoEditSection from './sections/TodoEditSection';

const App = () => {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      <TodoProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<TodoPage />} />
            {/* todo 관련 route */}
            <Route path="/todos/write" element={<TodoWriteSection />} />
            <Route path="/todos/:id" element={<TodoDetailSection />} />
            <Route path="/todos/:id/edit" element={<TodoEditSection />} />
            {/* todos 관련 route */}
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </TodoProvider>
    </div>
  );
};

export default App;
