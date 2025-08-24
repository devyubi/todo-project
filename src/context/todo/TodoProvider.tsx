import React, { ReactNode } from 'react';
import { TodoContext } from './TodoContext';
import { useTodos } from './useTodos';

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const { todos, handleAdd, handleDelete, handleToggle, handleUpdate } = useTodos();

  return (
    <TodoContext.Provider value={{ todos, handleAdd, handleDelete, handleToggle, handleUpdate }}>
      {children}
    </TodoContext.Provider>
  );
};
