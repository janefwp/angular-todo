import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserauthService } from '../../services/userauth.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';

import { selectRegisterError, selectRegisterFail, selectRegisterSuccess, } from '../../state/selectors/user.selectors';

import { userRegisterReq } from 'src/app/state/actions/user.actions';
import { UserState } from 'src/app/state/user.state';
// import { listTodos } from 'src/state/todo.actions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage$: Observable<String>;
  isSuccessful$: Observable<boolean>;
  isSignUpFailed$: Observable<boolean>;
  
  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    age: new FormControl()
  });

  constructor(
    private userauthservice: UserauthService,
    private store: Store
  ) { 
    this.isSuccessful$=this.store.select(selectRegisterSuccess);
    this.errorMessage$=this.store.select(selectRegisterError);
    this.isSignUpFailed$=this.store.select(selectRegisterFail);
    
  }

  ngOnInit() {
    return;
  };


  onSubmit() {
    
    // TODO: Use EventEmitter with form value
    const { name, email, password, age } = this.registerForm.value
    this.store.dispatch(userRegisterReq({name:name,email:email,password:password,age:age}));
    
  }
}
