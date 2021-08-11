import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../../services/userauth.service';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from 'src/app/state/selectors/user.selectors';
import { userInfoReq } from 'src/app/state/actions/user.actions';
import { User } from '../models/user';
import { selectLoading } from 'src/app/state/selectors/todo.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User>;
  isLoading$: Observable<boolean>;
  constructor(
    private userauthservice: UserauthService,
    private store: Store
  ) {
    this.user$ = this.store.select(selectUser);
    this.isLoading$ = this.store.select(selectLoading)
  }

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this.store.dispatch(userInfoReq())
  }
}
