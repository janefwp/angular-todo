import { Component, OnInit} from '@angular/core';
import { Todo } from '../models/todo';
import { Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { addTodoReq } from 'src/app/state/actions/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  constructor(
    private modalService: NgbModal,
    private store: Store
    ) {}

  @Output() newItemEvent = new EventEmitter<Todo>();
  todo = {title:'', description:'', deadline: new Date()}; 
  IsmodelShow = false;
  showConfirmMessage(
    message: string,
    showCancelButton = true,
    ){
    return Swal.fire({
      text: message,
      showCancelButton: showCancelButton,
    }).then((result)=>{
      if(result.isConfirmed) {
        this.IsmodelShow = true;
        let url: string = window.location.origin;
        window.location.assign(url);
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        this.IsmodelShow = false;
      }
    })
  }
  closeDialog(){
    this.showConfirmMessage(
    
      'Are you sure to close this task?',
      true,
      
    )
  }

  addTodo(){
    let date = Object.values(this.todo.deadline);
    
    const todoData: Todo={
      _id:0,
      title: this.todo.title,
      description: this.todo.description,
      deadline: date.join('-'),
      completed:false,
    }
    this.store.dispatch(addTodoReq({todo: todoData}))
  }
}
