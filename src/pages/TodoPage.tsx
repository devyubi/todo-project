import { useState } from 'react';
import TodoList from '../components/todos/TodoList';
import TodoWrite from '../components/todos/TodoWrite';
import { TodoType } from '../context/todo/todoTypes';

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onToggle = (id: number): void => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const onDelete = (id: number): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const onEdit = (id: number, title: string): void => {
    setTodos(prev => prev.map(item => (item.id === id ? { ...item, title } : item)));
  };

  const handleTodoUpdate = (newTodo: TodoType): void => {
    setTodos(prev => [newTodo, ...prev]);
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
          할 일 앱 서비스
        </h1>
        <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default TodoPage;
