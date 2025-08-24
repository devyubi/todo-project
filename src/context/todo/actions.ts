import { TodoType } from './todoTypes';

export const addTodo = (todos: TodoType[], newTodo: TodoType): TodoType[] => {
  return [newTodo, ...todos];
};

export const deleteTodo = (todos: TodoType[], id: number): TodoType[] => {
  return todos.filter(todo => todo.id !== id);
};

export const toggleTodo = (todos: TodoType[], id: number): TodoType[] => {
  return todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
};

export const updateTodo = (todos: TodoType[], updatedTodo: TodoType): TodoType[] => {
  return todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
};
