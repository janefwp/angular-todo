import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserStorageService } from '../user-storage.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  isLogin=false;
  isLoginFailed =false;
  errorMessage='';

  constructor(
    private userauthservice: UserauthService,
    private userstorageservice: UserStorageService
  ) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const {email,password}=this.loginForm.value
    this.userauthservice.login(email,password).subscribe(
      data=>{
        this.userstorageservice.saveToken(data.token);
        this.userstorageservice.saveUser(data.user)
        this.isLogin=true;
        this.isLoginFailed=false;
        this.reloadPage();
      },
      err=>{
        console.log(err);
        this.errorMessage=err.error;
        this.isLoginFailed=true;
      }
    )
  }

  reloadPage(): void {
    let url:string=window.location.origin;
    window.location.assign(url);
  }
  ngOnInit() {
    if(this.userstorageservice.getToken()){
      this.isLogin=true;
    }
  }

}
