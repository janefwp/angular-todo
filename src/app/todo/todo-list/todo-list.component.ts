import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';

import { selectTodos } from '../../state/selectors/todo.selectors';

import {  addTodoReq,  delTodoReq, getTodosReq, updateTodoReq } from 'src/app/state/actions/todo.actions';
// import { listTodos } from 'src/state/todo.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  
  todos$: Observable<ReadonlyArray<Todo>>;
  
  constructor(

    private store: Store
  ) { 
    this.todos$=this.store.select(selectTodos)
    console.log(this.todos$)
  
  }

  ngOnInit(){
    this.store.dispatch(getTodosReq())
  }

  // // todos: Todo[]=[];
  // isAddSuccessful=false;
  // isGetSuccessful=false;
  // isDelSuccessful=false;
  // isUpdateSuccessful=false;
  // addErrorMessage="";
  // getErrorMessage="";
  // delErrorMessage="";
  // updateErrorMesage="";

  addTodo(todo:Todo){
    console.log(todo)
    this.store.dispatch(addTodoReq({todo}))
  }

  delTodo(todo:Todo){
    this.store.dispatch(delTodoReq({todo}))
  }
  updateTodo(todo:Todo, completed: string){
    this.store.dispatch(updateTodoReq({todo,completed}));
  }
}
