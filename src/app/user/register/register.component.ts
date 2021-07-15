import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserauthService } from '../../services/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    age: new FormControl()
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private userauthservice: UserauthService
  ) { }

  ngOnInit() {
    return;
  };


  onSubmit() {
    // TODO: Use EventEmitter with form value
    const { name, email, password, age } = this.registerForm.value
    this.userauthservice.register(name, email, password, age).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err)
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    )
  }
}
