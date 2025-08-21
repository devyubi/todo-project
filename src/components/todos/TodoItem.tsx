import { useState } from 'react';
import { TodoType } from '../../context/todo/todoTypes';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
      setIsEdit(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleEditSave();
    if (e.key === 'Escape') setIsEdit(false);
  };

  return (
    <li
      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 
                 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      {isEdit ? (
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 
                       px-3 py-1 bg-gray-50 dark:bg-gray-700 focus:ring-2 
                       focus:ring-indigo-400 outline-none"
          />
          <button
            onClick={handleEditSave}
            className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm transition"
          >
            저장
          </button>
          <button
            onClick={() => setIsEdit(false)}
            className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 text-white text-sm transition"
          >
            취소
          </button>
        </div>
      ) : (
        <>
          <label className="flex items-center gap-3 flex-1 cursor-pointer">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="h-5 w-5 accent-indigo-500 cursor-pointer"
            />
            <span
              className={`flex-1 text-base transition-all ${
                todo.completed
                  ? 'line-through text-gray-400 dark:text-gray-500'
                  : 'text-gray-800 dark:text-gray-100'
              }`}
            >
              {todo.title}
            </span>
          </label>
          <div className="flex gap-2 ml-3">
            <button
              onClick={() => setIsEdit(true)}
              className="px-3 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm transition"
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
