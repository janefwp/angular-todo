import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLogin=false;
  name?:string;
  constructor(
    private userstorageservice: UserStorageService
  ) { }
  
  ngOnInit() {
    this.isLogin=!!this.userstorageservice.getToken();
    if(this.isLogin){
      const user=this.userstorageservice.getUser();
      this.name=user.name;
      console.log(this.name)
    }
  }
  logout(): void {
    this.userstorageservice.signOut();
    this.isLogin=false;
    window.location.reload();
  }
}
