import { Component, OnInit} from '@angular/core';
import { Todo } from '../todos'
import {FormControl} from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  titleInput=new FormControl();
  descriptionInput = new FormControl();
  isAddSuccessful = false;
  addErrorMessage="";
  constructor(
    private todoservice: TodoService
    ) { }
  
  ngOnInit() {
  }
  addTodo(){
    const todo: Todo={
      id:0,
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      completed:false,
    }
    this.todoservice.addTodo(todo).subscribe(
      data=>{
        console.log(data);
        this.isAddSuccessful=true;
      },
      err=>{
        console.log(err)
        this.addErrorMessage=err.error;
        this.isAddSuccessful=false;
      }
    );
  }
}
