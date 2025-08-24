import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/todo/TodoContext';
import { TodoType } from '../context/todo/todoTypes';
import TodoWriteSection from '../sections/TodoWriteSection';
import TodoReadSection from '../sections/TodoReadSection';
import TodoEditSection from '../sections/TodoEditSection';
import TodoDetailSection from '../sections/TodoDetailSection';

const TodoPage: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  const [editTodo, setEditTodo] = useState<TodoType | null>(null);
  const [detailTodo, setDetailTodo] = useState<TodoType | null>(null);
  if (!todoCtx) return <div>Loading...</div>;

  const { todos, handleAdd, handleDelete, handleToggle, handleUpdate } = todoCtx;

  const startEdit = (todo: TodoType) => setEditTodo(todo);
  const finishEdit = (updatedTodo: TodoType) => {
    handleUpdate(updatedTodo);
    setEditTodo(null);
  };
  const cancelEdit = () => setEditTodo(null);

  const showDetail = (todo: TodoType) => setDetailTodo(todo);
  const closeDetail = () => setDetailTodo(null);

  return (
    <main className="flex justify-center rounded-3xl py-10 px-4 sm:px-6 lg:px-8 bg-[#EDE4DC] dark:bg-[#2E2A28] min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-5xl p-8 rounded-3xl bg-[#F5EFE7] dark:bg-[#3C3735] shadow-lg min-h-[600px] flex flex-col">
        <h1 className="text-3xl font-bold text-center text-[#5A4B41] dark:text-[#EDE4DC] mb-8">
          나의 Todo 리스트
        </h1>

        {editTodo ? (
          <TodoEditSection todo={editTodo} onUpdate={finishEdit} onCancel={cancelEdit} />
        ) : detailTodo ? (
          <TodoDetailSection todo={detailTodo} onClose={closeDetail} />
        ) : (
          <>
            <TodoWriteSection onAdd={handleAdd} />
            <div className="mt-6">
              <TodoReadSection
                todos={todos}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default TodoPage;
