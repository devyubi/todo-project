import React from 'react';

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`
        flex justify-between items-center p-3 mb-2 rounded-md
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        hover:bg-gray-50 dark:hover:bg-gray-700
      `}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-3 w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
        />
        <span
          className={`${
            todo.completed
              ? 'line-through text-gray-400 dark:text-gray-500'
              : 'text-gray-900 dark:text-gray-100'
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 font-semibold"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
