import { createAction,  props } from '@ngrx/store';
import { Todo } from '../../todo/models/todo'
import { 
    TODO_LIST_REQ,
    TODO_LIST_FAIL,
    TODO_LIST_SUCCESS,
    TODO_ADD_FAIL,
    TODO_ADD_REQ,
    TODO_ADD_SUCCESS,
    TODO_DEL_REQ,
    TODO_DEL_FAIL,
    TODO_DEL_SUCCESS,
    TODO_UPDATE_FAIL,
    TODO_UPDATE_REQ,
    TODO_UPDATE_SUCCESS,

 } from './actions'

export const getTodosReq=createAction(TODO_LIST_REQ);
export const getTodosSuccess = createAction(TODO_LIST_SUCCESS,props<{fetchedTodos:Todo[]}>());
export const getTodosFail= createAction(TODO_LIST_FAIL, props<{error: string}>());

export const addTodoReq=createAction(TODO_ADD_REQ,props<{todo:Todo}>());
export const addTodoSuccess =createAction(TODO_ADD_SUCCESS, props<{addedTodo:Todo}>());
export const addTodoFail = createAction(TODO_ADD_FAIL, props<{error:string}>());

export const delTodoReq=createAction(TODO_DEL_REQ, props<{todo:Todo}>());
export const delTodoSuccess =createAction(TODO_DEL_SUCCESS, props<{deledTodo:Todo}>());
export const delTodoFail = createAction(TODO_DEL_FAIL, props<{error:string}>());

export const updateTodoReq=createAction(TODO_UPDATE_REQ, props<{todo:Todo, completed:string}>());
export const updateTodoSuccess =createAction(TODO_UPDATE_SUCCESS, props<{todo:Todo, completed:string}>());
export const updateTodoFail = createAction(TODO_UPDATE_FAIL, props<{error:string}>());