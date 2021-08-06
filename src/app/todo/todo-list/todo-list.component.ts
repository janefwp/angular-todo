import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import {NgxLoggerLevel, NGXLogger} from 'ngx-logger';

import { selectTodos } from '../../state/selectors/todo.selectors';

import {  addTodoReq,  delTodoReq, getTodosReq, updateTodoReq } from 'src/app/state/actions/todo.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  
  todos$: Observable<ReadonlyArray<Todo>>;
  
  constructor(
    private logger: NGXLogger,
    private store: Store
  ) { 
    this.todos$=this.store.select(selectTodos)
    this.logger.info(this.todos$)
  
  }

  ngOnInit(){
    this.store.dispatch(getTodosReq())
  }


  addTodo(todo:Todo){
    this.store.dispatch(addTodoReq({todo}))
  }

  delTodo(todo:Todo){
    this.store.dispatch(delTodoReq({todo}))
  }
  updateTodo(todo:Todo, completed: string){
    this.store.dispatch(updateTodoReq({todo,completed}));
  }
}
