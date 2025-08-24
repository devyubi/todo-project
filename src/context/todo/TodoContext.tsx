import { todoAction, TodoType } from './todoTypes';
import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

type TodoState = { todos: TodoType[] };
const initialState: TodoState = { todos: [] };

// reducer 함수
type AddAction = { type: 'ADD'; payload: TodoType };
type ToggleAction = { type: 'TOGGLE'; payload: { id: number } };
type DeleteAction = { type: 'DELETE'; payload: { id: number } };
type EditAction = { type: 'EDIT'; payload: { id: number; title: string } };
type TodoAction = AddAction | ToggleAction | DeleteAction | EditAction;

function todosReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case 'DELETE':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) };
    case 'EDIT':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo,
        ),
      };
    default:
      return state;
  }
}

// context type
type TodoContextValue = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
};

// context 생성
const TodoContext = createContext<TodoContextValue | null>(null);

// provider
export const TodoProvider = ({ children }: React.PropsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // dispatch 전용 함수
  const addTodo = useCallback((todo: TodoType) => dispatch({ type: 'ADD', payload: todo }), []);
  const toggleTodo = useCallback((id: number) => dispatch({ type: 'TOGGLE', payload: { id } }), []);
  const deleteTodo = useCallback((id: number) => dispatch({ type: 'DELETE', payload: { id } }), []);
  const editTodo = useCallback(
    (id: number, title: string) => dispatch({ type: 'EDIT', payload: { id, title } }),
    [],
  );

  const value = useMemo(
    () => ({ todos: state.todos, addTodo, toggleTodo, deleteTodo, editTodo }),
    [state.todos, addTodo, toggleTodo, deleteTodo, editTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// 커스텀훅
export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('ctx 가 없습니다.');
  return ctx;
}
