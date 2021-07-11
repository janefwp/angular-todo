import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api-nodejs-todolist.herokuapp.com/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const token=window.sessionStorage.getItem('auth-token');
const httpOptionswithToken = {
  headers: new HttpHeaders({ 
    'Authorization': "Bearer " +token, 
    'Content-Type': 'application/json'
   })
};

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API+ 'login', {
      "email": email,
      "password": password
    }, httpOptions);
  }

  register(name: string, email: string, password: string, age:number): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      "name":name,
      "email":email,
      "password":password,
      "age":age
    }, httpOptions);
  }
  getUserInfo(): Observable<any>{
    return this.http.get(AUTH_API+'me',httpOptionswithToken)
  }

}
