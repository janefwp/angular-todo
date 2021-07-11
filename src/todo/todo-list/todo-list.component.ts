import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  constructor(
    private todoservice:TodoService 
    ){ }

  todos: Todo[]=[];
  isAddSuccessful=false;
  isGetSuccessful=false;
  isDelSuccessful=false;
  isUpdateSuccessful=false;
  addErrorMessage="";
  getErrorMessage="";
  delErrorMessage="";
  updateErrorMesage="";

  ngOnInit() {
    this.getTodos();
  }

  addTodo(todo:Todo){
    
    this.todoservice.addTodo(todo).subscribe(
      data=>{
        console.log(data);
        console.log(data.data.completed);
        console.log(data.data._id)
        let newtodo:Todo=todo;
        newtodo.id=data.data._id;
        newtodo.completed=data.data.completed;
        this.todos.push(newtodo);
        this.isAddSuccessful=true;
      },
      err=>{
        console.log(err)
        this.addErrorMessage=err.error;
        this.isAddSuccessful=false;
      }
    );
  }

  getTodos(){
    this.todoservice.getTodos().subscribe(
      data=>{
        data.data.forEach((element:any )=> {
          console.log(element);
          let todo:Todo = JSON.parse(element.description);
          todo.completed=element.completed;
          todo.id= element._id;  
          this.todos.push(todo); 
          this.isGetSuccessful=true;  
        });
      },
      err=>{
        console.log(err);
        this.getErrorMessage=err.error;
        this.isGetSuccessful=false;
      }
    )
  }
  delTodo(todo:Todo){
    this.todoservice.delTodo(todo).subscribe(
      data=>{
        console.log(data)
        this.isDelSuccessful=true;
        let index:number=this.todos.findIndex(item=>todo.id===item.id);
        this.todos.splice(index,1);
      },
      err=>{
        console.log(err)
        this.delErrorMessage=err.error;
        this.isDelSuccessful=err.error;
      }
    );
  }
  updateTodo(todo:Todo, completed: string){
    this.todoservice.updateTodo(todo, completed).subscribe(
      data=>{
        console.log(data);
        this.isUpdateSuccessful=true;
      },
      err=>{
        console.log(err)
        this.updateErrorMesage=err.error;
        this.isUpdateSuccessful=false;
      }

    )

  }
}
