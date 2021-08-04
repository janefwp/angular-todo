import { Action, createReducer, on } from '@ngrx/store';
import { UserState, initialUserState } from '../user.state';
import { userInfoFail, userInfoReq, userInfoSuccess, userLoginFail, userLoginReq, userLoginSucess, userLogoutFail, userLogoutReq, userLogoutSuccess, userRegisterFail,userRegisterReq,userRegisterSuccess } from '../actions/user.actions';
import { User } from 'src/app/user/models/user';
import { initialState } from '../todo.state';
import { state } from '@angular/animations';

export const userReducer=createReducer(
    initialUserState,
    on(userRegisterReq,(state):UserState=>{
        return {
          ...state,
          userLoading:true
        }
      }),
      on(userRegisterSuccess,(state, {name,email,password,age}):UserState=>{
        var user: User={
            name: name,
            email: email,
            password: password,
            age:age
        };
    
        return {
          ...state,
          user:user,
          userLoading:false,
          registerSuccess:true,
          registerFail:false
        }
      }),

      on(userRegisterFail,(state,{error}):UserState=>{
        return {
          ...state,
          userError: error,
          userLoading: false,
          registerFail: true,
          registerSuccess:false
        }
      }),

      on(userLoginReq,(state,{email,password}): UserState=>{
        return{
          ...state,
          userLoading: true,
        }         
      }),
      on(userLoginSucess,(state,{token,user}): UserState=>{
        return{
          ...state,
          userLoading: false,
          loginSuccess: true,
        }         
      }),

      on(userLoginFail,(state,{error}):UserState=>{
        return {
          ...state,
          userError: error,
          userLoading: false,
          loginFail: true,
          loginSuccess:false
        }
      }),
      on(userLogoutReq,(state): UserState=>{
        return {
          ...state,
          userLoading: true
        }
      }),

      on(userLogoutSuccess,(state): UserState=>{
        return {
          ...state,
          userLoading: false,
          loginSuccess:false,
          logoutSuccess: true,
        }
      }),
      on(userLogoutFail,(state,{error}):UserState=>{
        return {
          ...state,
          userError: error,
          userLoading: false,
          logoutFail: true,
          loginSuccess:false
        }
      }),
      on(userInfoReq,(state): UserState => {
        return {
          ...state,
          userLoading: true
        }
      }),
      on(userInfoSuccess,(state, {user}): UserState => {
        return {
          ...state,
          userLoading: false,
          userInfoSuccess: true,
          user: user
        }
      }),
      on(userInfoFail,(state,{error}):UserState=>{
        return {
          ...state,
          userError: error,
          userLoading: false,
          userInfoFail: true,
          userInfoSuccess:false
        }
      }),
);