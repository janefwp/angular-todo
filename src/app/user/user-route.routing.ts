import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'


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
