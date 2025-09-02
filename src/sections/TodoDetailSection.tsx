import React from 'react';
import { TodoType } from '../context/todo/todoTypes';

interface Props {
  todo: TodoType;
  onClose: () => void;
}

const TodoDetailSection: React.FC<Props> = ({ todo, onClose }) => {
  return (
    <div className="p-6 mb-4 rounded-xl bg-[#F5EFE7] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] shadow-md">
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="mb-4">상태: {todo.completed ? '완료' : '진행중'}</p>
      <button
        onClick={onClose}
        className="px-5 py-2 rounded-md bg-[#DCCFBE] dark:bg-[#EDE4DC] dark:text-[#3C3735] hover:bg-[#CBBBAA] dark:hover:bg-[#DDD1C2] transition-colors"
      >
        닫기
      </button>
    </div>
  );
};

export default TodoDetailSection;
