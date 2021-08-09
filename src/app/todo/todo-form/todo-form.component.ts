import { Component, ViewChild} from '@angular/core';
import { Todo } from '../models/todo';
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

  todo = {title:'', description:'', deadline: new Date()}; 

  @ViewChild('todoModal') todoModal: any;
  closeResult: string | undefined;
  
  open() {
    this.modalService.open(this.todoModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showConfirmMessage(
    message: string,
    showCancelButton = true,
    ){
    return Swal.fire({
      text: message,
      showCancelButton: showCancelButton,

    }).then((result)=>{
      if(result.isConfirmed) {
        this.modalService.dismissAll()
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
    this.modalService.dismissAll()
  }
}
