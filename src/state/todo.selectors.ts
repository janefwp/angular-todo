import { Todo } from '../todo/todos';
import { createSelector } from "@ngrx/store";

export interface TodoState {
  todos: Todo[];
}

export const selectTodos= createSelector(
    (state: TodoState) => state.todos,
    (todos: Todo[])=>todos
)