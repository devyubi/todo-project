import React, { ReactNode } from 'react';
import { TodoContext } from './TodoContext';
import { useTodos } from './useTodos';

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const { todos, handleAdd, handleDelete, handleToggle, handleUpdate, handleDeleteAll } =
    useTodos();

  return (
    <TodoContext.Provider
      value={{ todos, handleAdd, handleDelete, handleToggle, handleUpdate, handleDeleteAll }}
    >
      {children}
    </TodoContext.Provider>
  );
};
