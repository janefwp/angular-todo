import { Injectable } from '@angular/core';
import { Todo } from './todos'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const API_PATH = 'https://api-nodejs-todolist.herokuapp.com/task/';
const token=window.sessionStorage.getItem('auth-token');
const httpOptions = {
  headers: new HttpHeaders({ 
    'Authorization': "Bearer " +token, 
    'Content-Type': 'application/json'
   })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[]
  constructor(
    private http: HttpClient,
  ) { 
 
  }
  
  addTodo(todo:Todo): Observable<any> {
    const description =JSON.stringify(todo);
    return this.http.post(API_PATH,{"description":description},httpOptions)
    
    // this.todos.push(todo);
  }
  getTodos():Observable<any>{
    return this.http.get(API_PATH,httpOptions)
    // return this.todos;
  }
  delTodo(todo:Todo):Observable<any> {
    return this.http.delete(API_PATH+todo.id,httpOptions)
    // const index= this.todos.findIndex(item=>item.id===todo.id);
    // return this.todos.splice(index,1);
  }
  updateTodo(todo:Todo,completed: string):Observable<any>{
    return this.http.put(API_PATH+todo.id,{"completed": completed},httpOptions)

  }
}
