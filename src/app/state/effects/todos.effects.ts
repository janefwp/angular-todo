import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { 
    TODO_LIST_REQ,
    TODO_LIST_FAIL,
    TODO_LIST_SUCCESS,

 } from '../actions/actions'
import { getTodosFail, getTodosSuccess } from '../actions/todo.actions';

@Injectable()
export class TodosEffects {

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ){};

    getTodos = createEffect(()=>{ return this.actions$.pipe(
        ofType(TODO_LIST_REQ),
        switchMap(()=>{
            return this.todoService.getTodos().pipe(
                // eslint-disable-next-line ngrx/no-multiple-actions-in-effects
                mergeMap((todos)=>[
                    getTodosSuccess({fetchedTodos:todos})
                ]),
                catchError((err) => [getTodosFail({error:err})])
            )
        })
    ) });



}