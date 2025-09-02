import { useState } from 'react';
import { TodoType } from './todoTypes';
import { addTodo, deleteTodo, toggleTodo, updateTodo, deleteAllTodos } from './actions';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  const saveTodos = (newTodos: TodoType[]) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleAdd = (todo: TodoType) => saveTodos(addTodo(todos, todo));
  const handleDelete = (id: number) => saveTodos(deleteTodo(todos, id));
  const handleToggle = (id: number) => saveTodos(toggleTodo(todos, id));
  const handleUpdate = (todo: TodoType) => saveTodos(updateTodo(todos, todo));

  // 새로 추가: 전체 삭제
  const handleDeleteAll = () => saveTodos(deleteAllTodos(todos));

  return { todos, handleAdd, handleDelete, handleToggle, handleUpdate, handleDeleteAll };
};
