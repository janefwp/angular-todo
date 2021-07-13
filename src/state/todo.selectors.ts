
import { createSelector } from "@ngrx/store";
import { TodoState } from './todo.state'
import { Todo } from '../todo/todos'


export const selectTodos = (state: TodoState) => state.todos;
