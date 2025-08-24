import { createContext, useCallback, useMemo, useReducer } from 'react';
import { initialState, TodoState, TodoType } from './todoTypes';
import { todosReducer } from './reducer';
import { AC } from './actions';

export const TodoStateContext = createContext<TodoState | null>(null);

type TodoActions = {
  addTodo: (todo: TodoType) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
};
export const TodoActionContext = createContext<TodoActions | null>(null);

export const TodoProvider = ({ children }: React.PropsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // dispatch 전용 함수
  const addTodo = useCallback((todo: TodoType) => dispatch(AC.addTodo(todo)), []);
  const toggleTodo = useCallback((id: number) => dispatch(AC.toggleTodo(id)), []);
  const deleteTodo = useCallback((id: number) => dispatch(AC.deleteTodo(id)), []);
  const editTodo = useCallback((id: number, title: string) => dispatch(AC.editTodo(id, title)), []);

  const stateValue = useMemo(() => state, [state]);
  const actionValue = useMemo(() => {
    return { addTodo, toggleTodo, deleteTodo, editTodo };
  }, [addTodo, toggleTodo, deleteTodo, editTodo]);

  return (
    <TodoStateContext.Provider value={stateValue}>
      <TodoActionContext.Provider value={actionValue}>{children}</TodoActionContext.Provider>
    </TodoStateContext.Provider>
  );
};
