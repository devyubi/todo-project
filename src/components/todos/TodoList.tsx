import React from 'react';
import TodoItem from './TodoItem';
import { TodoType } from '../../context/todo/todoTypes';

interface TodoListProps {
  todos: TodoType[];
  onToggle: (id: number | string) => void;
  onDelete: (id: number | string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <p className="text-[#5A4B41] dark:text-[#EDE4DC] text-center mt-5">할 일이 없습니다.</p>;
  }

  return (
    <ul className="mt-4 space-y-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
