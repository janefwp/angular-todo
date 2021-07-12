import { Component, OnInit } from '@angular/core';
import { Todo } from './todos';
import { TodoService } from '../services/todo.service'
import { select, Store} from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/range';
import { listTodos } from 'src/state/todo.actions';
import { selectTodos, TodoState } from 'src/state/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  
  constructor(
    private todoService: TodoService,
    private store: Store
  ) { 
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe(
        (data)=>{
          let Todo: Todo[]=[];
          data.forEach(
            (item)=>{
              let todo:Todo = JSON.parse(item.description);
              todo._id=item._id;
              todo.completed=item.completed;
              Todo.push(todo);
            }
          )
          console.log(Todo)
          this.store.dispatch(listTodos({Todo}));
        },
         
        )
    
     
      
  }

}
