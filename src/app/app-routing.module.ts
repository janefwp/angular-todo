import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodoListComponent } from '../todo/todo-list/todo-list.component'
import { TodoComponent } from './todo/todo.component'
import { AboutComponent } from './components/about/about.component'
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  // { path: '', component: TodoListComponent, canActivate: [LoginGuard] },
  { path: '', component: TodoComponent, canActivate: [LoginGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
