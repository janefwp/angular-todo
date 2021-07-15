import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from '../services/todo.service'
import { select, Store} from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/range';
import { listTodos } from 'src/app/state/todo.actions';
import { selectTodos } from 'src/app/state/todo.selectors';
import { TodoState } from '../state/todo.state'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todos$: Observable<Todo[]>;
  
  constructor(
    private todoService: TodoService,
    private store: Store<TodoState>
  ) { 
    // this.todos$ = this.store.select('todos');
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe(
        (data)=>{
          let alltodos: Todo[]=[];
          data.forEach(
            (item)=>{
              let todo:Todo = JSON.parse(item.description);
              todo._id=item._id;
              todo.completed=item.completed;
              alltodos.push(todo);
            }
          )
          console.log(alltodos)
          this.store.dispatch(listTodos({alltodos}));
        }, 
      )
  }
}
