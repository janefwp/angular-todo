
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from './todo.state'
import { Todo } from '../todo/todos'
import { Statement } from "@angular/compiler";


// export const selectTodos = (state: TodoState) => state.todos;

export const selectTodosFeatureState= createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
    selectTodosFeatureState,
    (state:TodoState)=> state.todos
    )


