import TodoList from '../components/todos/TodoList';
import TodoWrite from '../components/todos/TodoWrite';
import TodoWriteSection from '../sections/TodoWriteSection';

const TodoPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
          할 일 앱 서비스
        </h1>
        <TodoWriteSection />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
