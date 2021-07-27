import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap,map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { UserauthService } from 'src/app/services/userauth.service';
import { User } from 'src/app/user/models/user';
// import { TodoFormComponent } from 'src/app/todo/todo-form/todo-form.component';
import { 
    USER_REG_FAIL,
    USER_REG_REQ,
    USER_REG_SUCCESS
 } from '../actions/actions'
import { userRegisterSuccess, userRegisterFail } from '../actions/user.actions'

 @Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userauthService: UserauthService
    ){};

    userRegister =createEffect(()=>{
        return this.actions$.pipe(
            ofType(USER_REG_REQ),
            concatMap(({name,email,password,age})=>
            this.userauthService.register(name,email,password,age).pipe(
                map(({name,email,password,age})=>userRegisterSuccess({name:name,email:email,password:password,age:age})),
                catchError((err) => [userRegisterFail({error:err})]),
            )
            ),
        )
    }

    );
}