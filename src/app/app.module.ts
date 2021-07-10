import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { AboutComponent } from './about/about.component';
// import { LoginComponent } from './user/login/login.component';
// import { RegisterComponent } from './user/register/register.component';
// import { ProfileComponent } from './user/profile/profile.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoFormComponent,
    AboutComponent,
    // LoginComponent,
    // RegisterComponent,
    // ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
