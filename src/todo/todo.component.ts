import { Component, OnInit } from '@angular/core';
import { Todo } from './todos';
import { TodoService } from '../services/todo.service'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/range';
import { listTodos } from 'src/state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo>
  constructor(
    private todoService: TodoService,
    private store: Store<{ todos: Todo }>
  ) { 
    this.todos$=store.select('todos');
    console.log(this.todos$)
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe(
        (data)=>{
          let todos: Todo[]=[];
          data.forEach(
            (item)=>{
              let todo:Todo = JSON.parse(item.description);
              todo._id=item._id;
              todo.completed=item.completed;
              todos.push(todo);
            }
          )
          console.log(todos)
          this.store.dispatch(listTodos({todos}));
        },
         
        )
    
     
      
  }

}
