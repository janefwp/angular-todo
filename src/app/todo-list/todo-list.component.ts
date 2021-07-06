import { Component, OnInit } from '@angular/core';
import { Todo ,todos } from '../todos';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[]=this.todoservice.getTodos();
  constructor(
    private todoservice:TodoService 
    ){ }

  ngOnInit() {
  }

  delTodo(todo:Todo){
    this.todoservice.delTodo(todo);
  }

}
