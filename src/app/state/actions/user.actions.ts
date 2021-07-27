import { createAction,  props } from '@ngrx/store';
import {
    USER_REG_FAIL,
    USER_REG_REQ,
    USER_REG_SUCCESS
} from './actions'

export const userRegisterReq=createAction(USER_REG_REQ,props<{name: string, email: string, password: string, age:number}>());
export const userRegisterSuccess=createAction(USER_REG_SUCCESS,props<{name: string, email: string, password: string, age:number}>());
export const userRegisterFail=createAction(USER_REG_FAIL,props<{error:string}>());