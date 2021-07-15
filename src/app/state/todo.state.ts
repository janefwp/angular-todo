import { Todo } from '../todo/models/todo';
export interface TodoState {
    todos: ReadonlyArray<Todo>;
}