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

//   ngOnInit() {
//     this.todoService
//       .getTodos()
//       .subscribe(
//         (data)=>{
//           let alltodos: Todo[]=[];
//           data.forEach(
//             (item)=>{
//               let todo:Todo = JSON.parse(item.description);
//               todo._id=item._id;
//               todo.completed=item.completed;
//               alltodos.push(todo);
//             }
//           )
//           console.log(alltodos)
//           this.store.dispatch(listTodos({alltodos}));
//         }, 
//       )
//   }
}
