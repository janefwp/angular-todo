import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import {NgxLoggerLevel, NGXLogger} from 'ngx-logger';

import { selectLoading, selectTodos } from '../../state/selectors/todo.selectors';

import {  addTodoReq,  delTodoReq, getTodosReq, updateTodoReq } from 'src/app/state/actions/todo.actions';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  
  @ViewChild(TodoFormComponent)
  private todoFormComponent!: TodoFormComponent;
  todos$: Observable<ReadonlyArray<Todo>>;
  isLoading$: Observable<boolean>;

  constructor(
    private logger: NGXLogger,
    private store: Store
  ) { 
    this.todos$ = this.store.select(selectTodos)
    this.isLoading$ = this.store.select(selectLoading);
  
  }

  ngOnInit(){
    this.store.dispatch(getTodosReq())
  }
  openModal(){
    this.todoFormComponent.open()
  }

  delTodo(todo:Todo){
    this.store.dispatch(delTodoReq({todo}))
  }
  updateTodo(todo:Todo, completed: string){
    this.store.dispatch(updateTodoReq({todo,completed}));
  }
}
