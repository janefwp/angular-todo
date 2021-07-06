import { Component, OnInit} from '@angular/core';
import { Todo } from '../todos'
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  descriptionInput = new FormControl();
  constructor() { }
  
  ngOnInit() {
  }
  addTodo(){
    console.log(this.descriptionInput.value)
  }
}
