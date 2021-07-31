import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap,map, concatMap, exhaustMap, tap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/todo/models/todo';
import { TodoFormComponent } from 'src/app/todo/todo-form/todo-form.component';
import { 
    TODO_LIST_REQ,
    TODO_LIST_FAIL,
    TODO_LIST_SUCCESS,
    TODO_ADD_REQ,
    TODO_DEL_REQ,
    TODO_UPDATE_REQ,
    TODO_ADD_SUCCESS,

 } from '../actions/actions'
import { addTodoFail, addTodoSuccess, delTodoFail, delTodoSuccess, getTodosFail, getTodosSuccess, updateTodoFail, updateTodoSuccess } from '../actions/todo.actions';

@Injectable()
export class TodosEffects {

    constructor(
        private actions$: Actions,
        private todoService: TodoService
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
    }

    );
    
    addTodo = createEffect(()=>
    { return this.actions$.pipe(
        ofType(TODO_ADD_REQ),
        tap((todo) => console.log(todo)),
        concatMap(({todo})=>{
            console.log(todo)
            return this.todoService.addTodo(todo).pipe(
            tap((item)=>console.log(item)),
            map((item)=>addTodoSuccess({addedTodo:item.data})
                ),
                catchError((err)=>[addTodoFail({error:err})])
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

}