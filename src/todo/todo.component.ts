import { Component, OnInit } from '@angular/core';
import { Todo } from './todos';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe(
        data=>console.log(data)
      )
  }

}
