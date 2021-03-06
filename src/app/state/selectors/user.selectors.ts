
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from '../user.state'



// export const selectTodos = (state: TodoState) => state.todos;

export const selectUserFeatureState= createFeatureSelector<UserState>('user');
export const selectUserLoading = createSelector(selectUserFeatureState,(state: UserState) => state.userLoading);


export const selectUser = createSelector(selectUserFeatureState,(state: UserState) => state.user);
export const selectRegisterSuccess = createSelector(selectUserFeatureState,(state: UserState) => state.registerSuccess);
export const selectRegisterFail = createSelector(selectUserFeatureState,(state: UserState) => state.registerFail);
export const selectRegisterError = createSelector(selectUserFeatureState, (state: UserState) => state.userError);

export const selectLoginSuccess = createSelector(selectUserFeatureState,(state: UserState) => state.loginSuccess);
export const selectLoginFail = createSelector(selectUserFeatureState, (state: UserState)=> state.loginFail);
export const selectLoginError = createSelector(selectUserFeatureState, (state: UserState) => state.userError);
