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

  // 편집 시작
  const startEdit = (todo: TodoType) => setEditTodo(todo);
  // 편집 완료
  const finishEdit = (updatedTodo: TodoType) => {
    handleUpdate(updatedTodo);
    setEditTodo(null);
  };
  // 편집 취소
  const cancelEdit = () => setEditTodo(null);

  // 상세보기 시작
  const showDetail = (todo: TodoType) => setDetailTodo(todo);
  const closeDetail = () => setDetailTodo(null);

  return (
    <div className="max-w-md mx-10 mt-10 p-5 rounded-md bg-gray-50 dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
        나의 Todo 리스트
      </h1>

      {/* 쓰기 */}
      {!editTodo && !detailTodo && <TodoWriteSection onAdd={handleAdd} />}

      {/* 읽기 */}
      {!editTodo && !detailTodo && (
        <TodoReadSection
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}

      {/* 수정 */}
      {editTodo && <TodoEditSection todo={editTodo} onUpdate={finishEdit} onCancel={cancelEdit} />}

      {/* 상세보기 */}
      {detailTodo && <TodoDetailSection todo={detailTodo} onClose={closeDetail} />}
    </div>
  );
};

export default TodoPage;
