import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginGuard } from './login.guard';
import { UserRouteRoutes } from './user/user-route.routing'

const routes: Routes = [
  { path: '', component: TodoListComponent, canActivate: [LoginGuard] },
  { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
