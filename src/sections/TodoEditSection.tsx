import React, { useState } from 'react';
import { TodoType } from '../context/todo/todoTypes';

interface Props {
  todo: TodoType;
  onUpdate: (todo: TodoType) => void;
  onCancel: () => void;
}

const TodoEditSection: React.FC<Props> = ({ todo, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onUpdate({ ...todo, title });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
      >
        저장
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 rounded-md bg-gray-300 text-gray-900 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
      >
        취소
      </button>
    </form>
  );
};

export default TodoEditSection;
