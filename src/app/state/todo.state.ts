import { Todo } from '../todo/models/todo';
export interface AppState {
    todosLoading: boolean;
    todosError: string;
    todos: ReadonlyArray<Todo>;
}

export const initialState: AppState = {
    todosLoading:false,
    todosError:"",
    todos:[]
  };