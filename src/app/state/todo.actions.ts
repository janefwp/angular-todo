import { createAction,  props } from '@ngrx/store';
import { Todo } from '../todo/models/todo'

export const listTodos = createAction('[Todo Component] List Todos',props<{alltodos:Todo[]}>());
