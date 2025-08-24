import { createContext } from 'react';
import { TodoType } from './todoTypes';

export interface TodoContextType {
  todos: TodoType[];
  handleAdd: (todo: TodoType) => void;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
  handleUpdate: (todo: TodoType) => void;
  handleDeleteAll: () => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);
