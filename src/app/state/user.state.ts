import { User } from '../user/models/user';
export interface UserState {
    userLoading: boolean;
    userError: string;
    registerSuccess: boolean;
    loginSuccess:boolean;
    registerFail: boolean;
    loginFail:boolean;
    user: User;
}

export const initialUserState: UserState = {
    userLoading:false,
    userError:"",
    registerSuccess: false,
    loginSuccess:false,
    registerFail: false,
    loginFail:false,
    user: {
        name: " ",
        email: "",
        password: "",
        age:0
    }
  };