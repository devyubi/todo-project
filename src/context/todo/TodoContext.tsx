import { createContext } from 'react';
import { TodoType } from './todoTypes';

interface TodoContextType {
  todos: TodoType[];
  handleAdd: (todo: TodoType) => void;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
  handleUpdate: (todo: TodoType) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);
