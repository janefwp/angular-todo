import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'
import { LoginGuard } from '../login.guard';
import { combineLatest } from 'rxjs';

const userroutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(userroutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouteRoutes{ };
