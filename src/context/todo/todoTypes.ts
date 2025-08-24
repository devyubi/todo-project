export type TodoType = { id: number; title: string; completed: boolean };

// 상태 (state) 타입
export type TodoState = { todos: TodoType[] };

// action 타입
export type AddAction = { type: 'ADD'; payload: TodoType };
export type toggleAction = { type: 'TOGGLE'; payload: { id: number } };
export type deleteAction = { type: 'DELETE'; payload: { id: number } };
export type editAction = { type: 'EDIT'; payload: { id: number; title: string } };
export type todoAction = AddAction | toggleAction | deleteAction | editAction;

// 초기 상태값
export const initialState: TodoState = { todos: [] };
