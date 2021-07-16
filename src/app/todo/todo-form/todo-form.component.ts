import { Component, OnInit} from '@angular/core';
import { Todo } from '../models/todo'
import {FormControl} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() newItemEvent = new EventEmitter<Todo>();
  titleInput=new FormControl();
  descriptionInput = new FormControl();
  isAddSuccessful = false;
  addErrorMessage="";
  constructor(
    private todoservice: TodoService
    ) { }
  

  addTodo(){
    const todo: Todo={
      _id:0,
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      completed:false,
    }
    console.log(todo);
    this.newItemEvent.emit(todo)
    // this.todoservice.addTodo(todo).subscribe(
    //   data=>{
    //     console.log(data);
    //     this.isAddSuccessful=true;
    //   },
    //   err=>{
    //     console.log(err)
    //     this.addErrorMessage=err.error;
    //     this.isAddSuccessful=false;
    //   }
    // );
  }
}
