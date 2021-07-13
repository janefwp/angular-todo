import { Todo } from '../todo/todos';
export interface TodoState {
    todos: ReadonlyArray<Todo>;
}