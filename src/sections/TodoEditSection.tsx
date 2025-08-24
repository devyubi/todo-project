import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTodoActions, useTodoState } from '../context/todo/hooks';

const TodoEditSection = () => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { todos } = useTodoState();
  const { editTodo } = useTodoActions();
  const result = todos.find(item => item.id === Number(id));
  const [title, setTitle] = useState<string>(result?.title || '');

  useEffect(() => {
    if (result) {
      setTitle(result.title);
    }
  }, [result]);

  if (!id) {
    return (
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">잘못된 id 요청입니다.</h2>
          <NavLink
            to="/todos/read"
            className="rounded-md border border-neutral-300 px-3 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            목록으로
          </NavLink>
        </div>
      </section>
    );
  }
  if (!result) {
    return (
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">내용을 찾을 수 없습니다.</h2>
          <NavLink
            to="/todos/read"
            className="rounded-md border border-neutral-300 px-3 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            목록으로
          </NavLink>
        </div>
      </section>
    );
  }

  const handleSave = () => {
    const trim = title.trim();
    if (!trim) return;
    editTodo(result.id, title);
    navigate('/todos/read');
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">할일 수정</h2>
        <NavLink
          to="/todos/read"
          className="rounded-md border border-neutral-300 px-3 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          목록
        </NavLink>
      </div>

      <div className="space-y-4 rounded-xl2 bg-white p-6 shadow-card dark:bg-neutral-800">
        <label
          htmlFor="todo-title"
          className="block text-sm text-neutral-600 dark:text-neutral-300"
        >
          제목
        </label>
        <input
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand dark:border-neutral-700 dark:bg-neutral-900"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="flex items-center gap-2 pt-2">
          <button
            className="rounded-md bg-brand px-4 py-2 text-white hover:opacity-90"
            onClick={handleSave}
          >
            저장
          </button>
          <NavLink
            to={`/todos/read`}
            className="rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            취소
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TodoEditSection;
