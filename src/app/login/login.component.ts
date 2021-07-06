import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  constructor(
    private userauthservice: UserauthService
  ) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const {email,password}=this.loginForm.value
    this.userauthservice.login(email,password).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  ngOnInit() {
  }

}
