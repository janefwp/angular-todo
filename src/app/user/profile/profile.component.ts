import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userauthservice: UserauthService
  ) {

  }

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this.userauthservice.getUserInfo().subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
  }
}
