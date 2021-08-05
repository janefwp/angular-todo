import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  // todos$: Observable<Todo[]>;
  
  constructor(
   
  ) { 
    // this.todos$ = this.store.select('todos');
  }
}
