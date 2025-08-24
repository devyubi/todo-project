// import { AddAction, deleteAction, editAction, TodoType, toggleAction } from './todoTypes';

import { AddAction, deleteAction, editAction, TodoType, toggleAction } from "./todoTypes";

// export const addTodo = (todo: TodoType): AddAction => ({ type: 'ADD', payload: todo });
// export const toggleTodo = (id: string): toggleAction => ({ type: 'TOGGLE', payload: { id } });
// export const deleteTodo = (id: string): deleteAction => ({ type: 'DELETE', payload: { id } });
// export const editTodo = (id: string, title: string): editAction => ({
//   type: 'EDIT',
//   payload: { id, title },
// });

export const AC = {
  addTodo: (todo: TodoType): AddAction => ({ type: 'ADD', payload: todo }),
  toggleTodo: (id: number): toggleAction => ({ type: 'TOGGLE', payload: { id } }),
  deleteTodo: (id: number): deleteAction => ({ type: 'DELETE', payload: { id } }),
  editTodo: (id: number, title: string): editAction => ({ type: 'EDIT', payload: { id, title } }),
};
