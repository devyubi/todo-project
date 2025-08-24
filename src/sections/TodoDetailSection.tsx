import React from 'react';
import { TodoType } from '../context/todo/todoTypes';

interface Props {
  todo: TodoType;
  onClose: () => void;
}

const TodoDetailSection: React.FC<Props> = ({ todo, onClose }) => {
  return (
    <div className="p-4 mb-4 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md">
      <h2 className="text-xl font-bold mb-2">{todo.title}</h2>
      <p>상태: {todo.completed ? '완료' : '진행중'}</p>
      <button
        onClick={onClose}
        className="mt-3 px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        닫기
      </button>
    </div>
  );
};

export default TodoDetailSection;
