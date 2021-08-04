import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { User } from '../user/models/user';

const AUTH_API = 'https://api-nodejs-todolist.herokuapp.com/user/';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
};

const httpOptionswithToken =(token:string)=>{
  return {
  headers: new HttpHeaders({ 
    'Authorization': "Bearer " +token, 
    'Content-Type': 'application/json'
   })
};
}

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(
    private http: HttpClient,
    private userStorageService: UserStorageService
    ) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post(`${AUTH_API}login`, {
      "email": email,
      "password": password
    }, httpOptions);
  }

  register(name: string, email: string, password: string, age:number): Observable<any> {
    return this.http.post(`${AUTH_API}register`, {
      "name":name,
      "email":email,
      "password":password,
      "age":age
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(`${AUTH_API}logout`,httpOptionswithToken(this.userStorageService.getToken() ?? ''));
  }

  getUserInfo(): Observable<User | any>{
    return this.http.get(`${AUTH_API}me`,httpOptionswithToken(this.userStorageService.getToken() ?? ''))
  }

}
