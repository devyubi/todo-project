import React from 'react';
import TodoItem, { TodoType } from './TodoItem';

interface TodoListProps {
  todos: TodoType[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400 text-center mt-5">할 일이 없습니다.</p>;
  }

  return (
    <ul className="mt-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
