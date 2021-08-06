import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap,map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';
import { 
    TODO_LIST_REQ,
    TODO_ADD_REQ,
    TODO_DEL_REQ,
    TODO_UPDATE_REQ,
    TODO_ADD_SUCCESS,
    TODO_ADD_FAIL,
    TODO_DEL_SUCCESS,
    TODO_DEL_FAIL,
    TODO_UPDATE_SUCCESS,
    TODO_UPDATE_FAIL,
 } from '../actions/actions'
import { addTodoFail, addTodoSuccess, delTodoFail, delTodoSuccess, getTodosFail, getTodosSuccess, updateTodoFail, updateTodoSuccess } from '../actions/todo.actions';

@Injectable()
export class TodosEffects {

    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private toastr: ToastrService 
    ){};

    getTodos=createEffect(()=>{
        return this.actions$.pipe(
            ofType(TODO_LIST_REQ),
            exhaustMap(()=>
            this.todoService.getTodos().pipe(
                map((todos)=>getTodosSuccess({fetchedTodos:todos})),
                catchError((err) => [getTodosFail({error:err})]),
            )
            ),
        )
    });
    
    addTodo = createEffect(()=>
    { return this.actions$.pipe(
        ofType(TODO_ADD_REQ),
        concatMap(({todo})=>{
            return this.todoService.addTodo(todo).pipe(
            map((item)=>addTodoSuccess({addedTodo:item.data})),
            catchError((err)=>[addTodoFail({error:err})]
            )
            )
        })
    ) });

    delTodo = createEffect(()=>
    {
        return this.actions$.pipe(
            ofType(TODO_DEL_REQ),
            mergeMap(({todo})=>{
                return this.todoService.delTodo(todo).pipe(
                    map(()=>delTodoSuccess({deledTodo:todo})),
                    catchError((err)=>[delTodoFail({error:err})])
                )
            })
        )
    });

    updateTodo = createEffect(()=>
    {
        return this.actions$.pipe(
            ofType(TODO_UPDATE_REQ),
            concatMap(({todo,completed})=>{
                return this.todoService.updateTodo(todo,completed).pipe(
                    map(()=>updateTodoSuccess({todo:todo, completed:completed})),
                    catchError((err)=>[updateTodoFail({error:err})])
                )
            })
        )
    });
    showAddSuccess$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_ADD_SUCCESS),
            tap(() => {
              this.toastr.success("Todo add success","Add todo");
            })
          ) },
        { dispatch: false }
      );
    
    showAddError$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_ADD_FAIL),
            tap(({err}) => {
              this.toastr.error(err,"Add todo");
            })
          ) },
        { dispatch: false }
    );  
    showDelSuccess$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_DEL_SUCCESS),
            tap(() => {
              this.toastr.success("Todo del success","Del todo");
            })
          ) },
        { dispatch: false }
      );
    showDelFail$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_DEL_FAIL),
            tap(({err}) => {
              this.toastr.error(err,"Del todo");
            })
          ) },
        { dispatch: false }
      );
    
    showUpdateSuccess$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_UPDATE_SUCCESS),
            tap(() => {
              this.toastr.success("Todo update success","Update todo");
            })
          ) },
        { dispatch: false }
      );
    showUpdateFail$ = createEffect(
        () =>
          { return this.actions$.pipe(
            ofType(TODO_UPDATE_FAIL),
            tap(({err}) => {
              this.toastr.error(err,"Update todo");
            })
          ) },
        { dispatch: false }
      );

}