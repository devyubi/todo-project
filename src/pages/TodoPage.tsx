import { useState } from 'react';
import TodoList from '../components/todos/TodoList';
import TodoWrite from '../components/todos/TodoWrite';
import { TodoType } from '../components/todos/todoTypes';

const TodoPage = () => {
  // ts 자리
  const [todos, setTodos] = useState<TodoType[]>([]);

  // CRUD
  const onToggle = (id: number): void => {
    const arr = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(arr);
  };
  const onDelete = (id: number): void => {
    const arr = todos.filter(todo => todo.id === id);
    setTodos(arr);
  };
  const onEdit = (id: number, title: string): void => {
    const arr = todos.map(item => (item.id === id ? { ...item, title } : item));
    setTodos(arr);
  };

  // todos 를 업데이트 하는 함수
  const handleTodoUpdate = (newTodo: TodoType): void => {
    const arr: TodoType[] = [newTodo, ...todos];
    setTodos(arr);
  };

  // tsx 자리
  return (
    <div>
      <h1>할 일 앱 서비스</h1>
      <div>
        <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default TodoPage;
