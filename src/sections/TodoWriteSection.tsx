import React, { useState } from 'react';
import { TodoType } from '../context/todo/todoTypes';

interface Props {
  onAdd: (todo: TodoType) => void;
}

const TodoWriteSection: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo: TodoType = { id: Date.now(), title, completed: false };

    onAdd(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
        className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        추가
      </button>
    </form>
  );
};

export default TodoWriteSection;
