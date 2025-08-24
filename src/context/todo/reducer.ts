import { TodoType } from './todoTypes';

export type TodoAction =
  | { type: 'ADD'; payload: TodoType }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'UPDATE'; payload: TodoType };

export const todoReducer = (state: TodoType[], action: TodoAction): TodoType[] => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    case 'UPDATE':
      return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
    default:
      return state;
  }
};
