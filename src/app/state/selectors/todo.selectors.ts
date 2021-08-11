
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../todo.state'
import { Todo } from '../../todo/models/todo'
import { Statement } from "@angular/compiler";


// export const selectTodos = (state: TodoState) => state.todos;

export const selectTodosFeatureState= createFeatureSelector<AppState>('todos');

export const selectTodos = createSelector(
    selectTodosFeatureState,
    (state:AppState)=> state.todos
    );
export const selectLoading = createSelector(
        selectTodosFeatureState,
        (state:AppState)=> state.todosLoading
        )


