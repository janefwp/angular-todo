import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { todosReducer } from '../state/reducers/todo.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment'; 
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from '../state/effects/todos.effects';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos',todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
  ]
})
export class TodoModule { }
