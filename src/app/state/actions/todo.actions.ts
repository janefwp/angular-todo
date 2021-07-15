import { createAction,  props } from '@ngrx/store';
import { Todo } from '../../todo/models/todo'
import { 
    TODO_LIST_REQ,
    TODO_LIST_FAIL,
    TODO_LIST_SUCCESS,

 } from './actions'

export const getTodosReq=createAction(TODO_LIST_REQ);
export const getTodosSuccess = createAction(TODO_LIST_SUCCESS,props<{fetchedTodos:Todo[]}>());
export const getTodosFail= createAction(TODO_LIST_FAIL, props<{error: string}>())
