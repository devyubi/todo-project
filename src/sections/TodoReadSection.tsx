import React, { useState } from 'react';
import { TodoType } from '../context/todo/todoTypes';

interface Props {
  todos: TodoType[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (updatedTodo: TodoType) => void;
}

const TodoReadSection: React.FC<Props> = ({ todos, onToggle, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  const startEdit = (todo: TodoType) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const finishEdit = (id: number) => {
    if (!editTitle.trim()) return;
    onUpdate({ id, title: editTitle, completed: todos.find(t => t.id === id)!.completed });
    setEditId(null);
    setEditTitle('');
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle('');
  };

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <div
          key={todo.id}
          className="flex items-center gap-4 justify-between p-6 rounded-xl bg-[#fffaf5] dark:bg-[#2d2724] shadow-md"
        >
          <div className="flex items-center gap-4 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-6 h-6 accent-[#7AA374]"
            />
            {editId === todo.id ? (
              <textarea
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    finishEdit(todo.id);
                  }
                }}
                className="flex-1 px-4 py-2 rounded-md border border-[#E0D7CC] dark:border-[#5A4B41] 
                           bg-[#F5EFE7] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] 
                           focus:outline-none focus:ring-2 focus:ring-[#7AA374] text-lg resize-none"
                rows={2}
              />
            ) : (
              <span
                className={`text-lg whitespace-pre-line ${
                  todo.completed
                    ? 'line-through text-gray-400 dark:text-gray-500'
                    : 'text-[#5A4B41] dark:text-[#EDE4DC]'
                }`}
              >
                {todo.title}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {editId === todo.id ? (
              <>
                <button
                  onClick={() => finishEdit(todo.id)}
                  className="px-4 py-2 rounded-md bg-[#445f99] text-white hover:bg-[#394e77] transition-colors"
                >
                  저장
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 rounded-md bg-[#9f3737] text-white hover:bg-[#6e1f1f] transition-colors"
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => startEdit(todo)}
                  className="px-4 py-2 rounded-md bg-[#ffba76] text-white hover:bg-[#B8865B] transition-colors"
                >
                  수정
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="px-4 py-2 rounded-md bg-[#be3e30] text-white hover:bg-[#8B1A1A] transition-colors"
                >
                  삭제
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoReadSection;
