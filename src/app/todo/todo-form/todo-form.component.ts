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
  todo = {title:'', description:'', deadline: new Date()}; 

  addTodo(){
    let date = Object.values(this.todo.deadline);
    
    const todoData: Todo={
      _id:0,
      title: this.todo.title,
      description: this.todo.description,
      deadline: date.join('-'),
      completed:false,
    }
    this.newItemEvent.emit(todoData)
  }
}
