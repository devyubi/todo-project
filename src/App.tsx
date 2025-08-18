import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
