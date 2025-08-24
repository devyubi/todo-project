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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="flex-1 px-3 py-2 rounded-md border border-[#E0D7CC] dark:border-[#5A4B41] bg-[#F5EFE7] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] focus:outline-none focus:ring-2 focus:ring-[#7AA374] transition-colors"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-[#4F9944] text-white hover:bg-[#3A683B] dark:bg-[#5E8760] dark:hover:bg-[#7AA374] transition-colors"
      >
        저장
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 rounded-md bg-[#B8865B] text-white hover:bg-[#8C7561] dark:bg-[#5A4B41] dark:hover:bg-[#7AA374] transition-colors"
      >
        취소
      </button>
    </form>
  );
};

export default TodoEditSection;
