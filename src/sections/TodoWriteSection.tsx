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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
        className="flex-1 px-4 py-2 rounded-md border border-[#E0D7CC] bg-[#ffffff] dark:border-[#5A4B41] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] focus:outline-none focus:ring-2 focus:ring-[#7AA374]"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-[#4f9944] text-white hover:bg-[#3a683b] transition-colors"
      >
        추가
      </button>
    </form>
  );
};

export default TodoWriteSection;
