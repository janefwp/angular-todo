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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin=false;
  isLoginSucceed$ :Observable<boolean>;
  isLoginFailed$ :Observable<boolean>;
  errorMessage$ :Observable<String>;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private userauthservice: UserauthService,
    private userstorageservice: UserStorageService,
    private store:Store
  ) { 
    this.isLoginSucceed$ = store.select(selectLoginSuccess);
    this.isLoginFailed$ = store.select(selectLoginFail);
    this.errorMessage$ = store.select(selectLoginError);
    console.log(this.isLoginSucceed$)
    // if(this.isLoginSucceed$){
    //   console.log(this.isLoginSucceed$)
    //   this.reloadPage()
    // }
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
