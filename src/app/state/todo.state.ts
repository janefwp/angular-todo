import { Todo } from '../todo/models/todo';
export interface AppState {
    todosLoading: boolean;
    isListSuccess: boolean,
    isAddSuccess: boolean,
    isDelSuccess: boolean,
    isUpdateSuccess: boolean,
    todosError: string;
    todos: ReadonlyArray<Todo>;
}

export const initialState: AppState = {
    todosLoading: false,
    isListSuccess: false,
    isAddSuccess: false,
    isDelSuccess: false,
    isUpdateSuccess: false,
    todosError: "",
    todos:[]
  };