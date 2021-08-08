import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/services/userauth.service';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLogin = false;
  name = '';
  errorMessage = '';
  isLogout = false;
  constructor(
    private userstorageservice: UserStorageService,
    private userauthservice: UserauthService,
  ) { }
  
  ngOnInit() {
    this.isLogin=!!this.userstorageservice.getToken();
    if(this.isLogin){
      const user=this.userstorageservice.getUser();
      this.name=user.name;
    
    }
  }
  logout(): void {
        this.userstorageservice.signOut()
        this.isLogin=false;
        this.isLogout=true;
        window.location.reload();
        this.userauthservice.logout();
      
  }
}
