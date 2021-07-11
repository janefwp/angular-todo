import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component'
import { UserRouteRoutes } from './user-route.routing'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouteRoutes,
  ],
  declarations: [UserComponent, LoginComponent, RegisterComponent, ProfileComponent],
  exports:[ LoginComponent, RegisterComponent, ProfileComponent]
})
export class UserModule { }
