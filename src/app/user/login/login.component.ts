import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserStorageService } from '../../services/user-storage.service';
import { UserauthService } from '../../services/userauth.service';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoginError, selectLoginFail, selectLoginSuccess } from 'src/app/state/selectors/user.selectors';
import { ThisReceiver } from '@angular/compiler';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { userLoginReq } from 'src/app/state/actions/user.actions';
import { selectLoading } from 'src/app/state/selectors/todo.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = false;
  isLoginSucceed$: Observable<boolean>;
  isLoginFailed$: Observable<boolean>;
  errorMessage$: Observable<String>;
  isLoading$: Observable<boolean>;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private userauthservice: UserauthService,
    private userstorageservice: UserStorageService,
    private store:Store
  ) { 
    this.isLoginSucceed$ = this.store.select(selectLoginSuccess);
    this.isLoginFailed$ = this.store.select(selectLoginFail);
    this.errorMessage$ = this.store.select(selectLoginError);
    this.isLoading$ = this.store.select(selectLoading)

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const { email, password } = this.loginForm.value
    this.store.dispatch(userLoginReq({email, password}));

  }

  reloadPage(): void {
    let url: string = window.location.origin;
    window.location.assign(url);
  }
  ngOnInit() {
    if (this.userstorageservice.getToken()) {
      this.isLogin =true;
    }
  }

}
