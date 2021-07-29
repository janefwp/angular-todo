import { createAction,  props } from '@ngrx/store';
import {
    USER_REG_FAIL,
    USER_REG_REQ,
    USER_REG_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQ,
    USER_LOGIN_SUCCESS
} from './actions'

export const userRegisterReq = createAction(USER_REG_REQ,props<{name: string, email: string, password: string, age:number}>());
export const userRegisterSuccess = createAction(USER_REG_SUCCESS,props<{name: string, email: string, password: string, age:number}>());
export const userRegisterFail = createAction(USER_REG_FAIL,props<{error:string}>());
export const userLoginReq = createAction(USER_LOGIN_REQ, props<{email: string, password: string}>());
export const userLoginSucess = createAction(USER_LOGIN_SUCCESS, props<{token: string, user: any}>());
export const userLoginFail = createAction(USER_LOGIN_FAIL, props<{error:string}>());
