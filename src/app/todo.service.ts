import { Injectable } from '@angular/core';
import { Todo } from './todos'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:Todo[]=[]
constructor() { }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  getTodos(){
    return this.todos;
  }
  delTodo(todo:Todo){
    const index= this.todos.findIndex(item=>item.id===todo.id);
    return this.todos.splice(index,1);
  }
}
