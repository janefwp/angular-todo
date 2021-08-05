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
        tap((todo) => console.log(todo)),
        concatMap(({todo})=>{
            console.log(todo)
            return this.todoService.addTodo(todo).pipe(
            tap((item)=>console.log(item)),
            map((item)=>{
                this.toastr.success("Add todo successfully","Add todo");
                return addTodoSuccess({addedTodo:item.data});
            }),
            catchError((err)=>{
                this.toastr.error("Add todo failed","Add todo");
                // eslint-disable-next-line ngrx/no-multiple-actions-in-effects
                return [addTodoFail({error:err})]
            }
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
                    map(()=>{
                        this.toastr.success("Del todo succeed","Del todo")
                        return delTodoSuccess({deledTodo:todo})
                    }),
                    catchError((err)=>{
                        this.toastr.error("Del todo failed","Del todo");
                        // eslint-disable-next-line ngrx/no-multiple-actions-in-effects
                        return [delTodoFail({error:err})];
                    })
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
                    map(()=>{
                        this.toastr.success("Update todo succeed","Update todo");
                        return updateTodoSuccess({todo:todo, completed:completed})
                }),
                    catchError((err)=>{
                        this.toastr.error("Update todo failed","Update todo")
                        // eslint-disable-next-line ngrx/no-multiple-actions-in-effects
                        return [updateTodoFail({error:err})]
                    })
                )

            })
        )
    });

}