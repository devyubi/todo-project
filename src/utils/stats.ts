import dayjs from 'dayjs';
import { TodoType } from '../context/todo/todoTypes';

// 범위 필터
export const filterToday = (todos: TodoType[]) =>
  todos.filter(todo => todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), 'day'));

export const filterThisWeek = (todos: TodoType[]) =>
  todos.filter(todo => todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), 'week'));

export const filterThisMonth = (todos: TodoType[]) =>
  todos.filter(todo => todo.dueDate && dayjs(todo.dueDate).isSame(dayjs(), 'month'));

// 완료율 계산
export const getCompletionRate = (todos: TodoType[]) => {
  const total = todos.length;
  if (total === 0) return 0;
  const completed = todos.filter(t => t.completed).length;
  return Math.round((completed / total) * 100);
};
