import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap,map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { UserauthService } from 'src/app/services/userauth.service';
import { User } from 'src/app/user/models/user';
// import { TodoFormComponent } from 'src/app/todo/todo-form/todo-form.component';
import { 
    USER_INFO_REQ,
    USER_LOGIN_REQ,
    USER_LOGOUT_REQ,
    USER_REG_FAIL,
    USER_REG_REQ,
    USER_REG_SUCCESS
 } from '../actions/actions'
import { userRegisterSuccess, userRegisterFail, userLoginSucess, userLoginFail, userLogoutSuccess, userLogoutFail, userInfoSuccess, userInfoFail } from '../actions/user.actions'

 @Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userauthService: UserauthService,
        private userstorageservice: UserStorageService,
    ){};

    userRegister = createEffect(()=>{
        return this.actions$.pipe(
            ofType(USER_REG_REQ),
            concatMap(({name,email,password,age})=>
            this.userauthService.register(name,email,password,age).pipe(
                map(({name,email,password,age})=>userRegisterSuccess({name:name,email:email,password:password,age:age})),
                catchError((err) => [userRegisterFail({error:err.message})]),
            )
            ),
        )
    }

    );

    userLogin = createEffect(()=>{
        return this.actions$.pipe(
            ofType(USER_LOGIN_REQ),
            mergeMap(({email,password})=>
                this.userauthService.login(email,password).pipe(
                    map((data)=>
                     {
                        this.userstorageservice.saveToken(data.token);
                        this.userstorageservice.saveUser(data.user);
                        let url: string = window.location.origin;
                        window.location.assign(url);
                        return userLoginSucess({token:data.token, user:data.user});
                    }
                    ),
                    catchError((err) => [userLoginFail({error:err.message})]),
                )
            )
        )

    });

    userLogout = createEffect(()=>{
        return this.actions$.pipe(
            ofType(USER_LOGOUT_REQ),
            mergeMap(()=>
                this.userauthService.logout().pipe(
                    map((data)=>
                     {
                        this.userstorageservice.signOut();
                        
                        return userLogoutSuccess();
                    }
                    ),
                    catchError((err) => [userLogoutFail({error:err.message})]),
                )
            )
        )

    });



    userList = createEffect(()=>{
        return this.actions$.pipe(
            ofType(USER_INFO_REQ),
            mergeMap(()=>
                this.userauthService.getUserInfo().pipe(
                    map((data)=>
                     {
                        var user: User={
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            age:data.age
                        };
                        return userInfoSuccess({user:user});
                    }
                    ),
                    catchError((err) => [userInfoFail({error:err.message})]),
                )
            )
        )

    });

}