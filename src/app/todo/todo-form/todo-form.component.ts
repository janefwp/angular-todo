import { Component, OnInit} from '@angular/core';
import { Todo } from '../models/todo'
import {FormControl, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../../services/todo.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() newItemEvent = new EventEmitter<Todo>();
  titleInput = new FormControl('',Validators.required);
  descriptionInput = new FormControl('', Validators.required);
  deadlineInput = new FormControl(new Date(), Validators.required);
  isAddSuccessful = false;
  addErrorMessage="";
  constructor(
    private todoservice: TodoService
    ) { }
  

  addTodo(){
    let date = Object.values(this.deadlineInput.value);
    
    const todo: Todo={
      _id:0,
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      deadline: date.join('-'),
      completed:false,
    }
    
    this.newItemEvent.emit(todo)
  }
}
