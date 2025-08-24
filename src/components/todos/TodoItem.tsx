import React from 'react';
import dayjs from 'dayjs';
import { getDDay } from '../../utils/date';
import { TodoType } from '../../context/todo/todoTypes';

interface TodoItemProps {
  todo: TodoType;
  onToggle: (id: number | string) => void;
  onDelete: (id: number | string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className="
        flex justify-between items-center p-4 mb-3 rounded-xl
        bg-[#F5EFE7] dark:bg-[#3C3735]
        border border-[#E0D7CC] dark:border-[#5A4B41]
        hover:bg-[#EFE6DE] dark:hover:bg-[#4A3F3B]
        transition-colors
      "
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-3 w-5 h-5 text-[#5A4B41] dark:text-[#EDE4DC] rounded focus:ring-[#5A4B41]"
        />
        <span
          className={`${
            todo.completed
              ? 'line-through text-[#A7988C] dark:text-[#7A6C60]'
              : 'text-[#5A4B41] dark:text-[#EDE4DC]'
          }`}
        >
          {todo.title}
        </span>
      </div>

      <div className="flex items-center">
        {todo.dueDate && (
          <span
            className={`ml-3 ${
              dayjs(todo.dueDate).isBefore(dayjs(), 'day') ? 'text-[#D9534F]' : 'text-[#8C7561]'
            }`}
          >
            {getDDay(todo.dueDate)}
          </span>
        )}

        <button
          onClick={() => onDelete(todo.id)}
          className="ml-4 font-semibold text-[#B23C3C] dark:text-[#EDE4DC] hover:text-[#8C2E2E] dark:hover:text-[#FFD9D9] transition-colors"
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
