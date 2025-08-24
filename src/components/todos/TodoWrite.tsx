import React, { useState } from 'react';
import { TodoType } from './TodoItem';

interface TodoWriteProps {
  onAdd: (todo: TodoType) => void;
}

const TodoWrite: React.FC<TodoWriteProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTodo: TodoType = { id: Date.now(), title: title.trim(), completed: false };

    onAdd(newTodo);
    setTitle('');
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="새로운 할 일을 입력하세요"
        className="flex-1 p-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAdd}
        className="p-2 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white rounded-r-md font-semibold"
      >
        추가
      </button>
    </div>
  );
};

export default TodoWrite;
