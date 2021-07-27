import { Action, createReducer, on } from '@ngrx/store';
import { UserState, initialUserState } from '../user.state';
import { userRegisterFail,userRegisterReq,userRegisterSuccess } from '../actions/user.actions';
import { User } from 'src/app/user/models/user';
import { initialState } from '../todo.state';

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
            name: " ",
            email: "",
            password: "",
            age:0
        };
        user.name=name;
        user.email=email;
        user.password=password;
        user.age=age;

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
);