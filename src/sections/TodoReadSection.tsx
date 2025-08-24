import React from 'react';
import { NavLink } from 'react-router-dom';
import TodoList from '../components/todos/TodoList';

const TodoReadSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">할일 목록</h2>
        <NavLink
          to={'/todos/write'}
          className="rounded-md border border-neutral-300 px-3 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          새 할일 작성
        </NavLink>
      </div>
      <div className="rounded-xl2 shadow-card space-y-6 bg-white p-6 dark:bg-neutral-800">
        <TodoList />
      </div>
    </section>
  );
};

export default TodoReadSection;
