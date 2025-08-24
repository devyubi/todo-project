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
    <div className="mb-4 space-y-3">
      {todos.map(todo => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-5 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
        >
          <div className="flex items-center gap-4 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-7 h-7"
            />
            {editId === todo.id ? (
              <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              />
            ) : (
              <span
                className={`text-lg ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''}`}
              >
                {todo.title}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            {editId === todo.id ? (
              <>
                <button
                  onClick={() => finishEdit(todo.id)}
                  className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
                >
                  저장
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 text-sm rounded-md bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => startEdit(todo)}
                  className="px-4 py-2 text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400"
                >
                  수정
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500"
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
