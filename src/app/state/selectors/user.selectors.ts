
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from '../user.state'
import { User } from '../../user/models/user'
import { Statement } from "@angular/compiler";


// export const selectTodos = (state: TodoState) => state.todos;

export const selectUserFeatureState= createFeatureSelector<UserState>('user');
export const selectUser = createSelector(selectUserFeatureState,(state: UserState) => state.user);

export const selectRegisterSuccess =createSelector(selectUserFeatureState,(state: UserState) => state.registerSuccess);

export const selectRegisterFail = createSelector(selectUserFeatureState,(state: UserState) => state.registerFail);

export const selectRegisterError =createSelector(selectUserFeatureState, (state: UserState) => state.userError);

