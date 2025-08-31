import { TodoType } from './todoTypes';

// 아래 코드들을 고차함수로 전환

// 고차함수: todos 배열을 받아서 특정 "변환 로직"을 적용하는 함수
const withTodos =
  (fn: (todos: TodoType[], payload?: any) => TodoType[]) =>
  (todos: TodoType[], payload?: any): TodoType[] => {
    return fn(todos, payload);
  };

// 구체적인 동작들
const _add = (todos: TodoType[], newTodo: TodoType) => [newTodo, ...todos];
const _delete = (todos: TodoType[], id: number) => todos.filter(todo => todo.id !== id);
const _toggle = (todos: TodoType[], id: number) =>
  todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
const _update = (todos: TodoType[], updatedTodo: TodoType) =>
  todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
const _deleteAll = () => [];

// HOF로 감싸기
export const addTodo = withTodos(_add);
export const deleteTodo = withTodos(_delete);
export const toggleTodo = withTodos(_toggle);
export const updateTodo = withTodos(_update);
export const deleteAllTodos = withTodos(_deleteAll);

// CRUD
// export const addTodo = (todos: TodoType[], newTodo: TodoType): TodoType[] => {
//   return [newTodo, ...todos];
// };

// export const deleteTodo = (todos: TodoType[], id: number): TodoType[] => {
//   return todos.filter(todo => todo.id !== id);
// };

// export const toggleTodo = (todos: TodoType[], id: number): TodoType[] => {
//   return todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
// };

// export const updateTodo = (todos: TodoType[], updatedTodo: TodoType): TodoType[] => {
//   return todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
// };

// 전체 삭제
// export const deleteAllTodos = (_todos: TodoType[]): TodoType[] => {
//   return [];
// };
