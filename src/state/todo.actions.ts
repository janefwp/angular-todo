import { createAction,  props } from '@ngrx/store';
import { Todo } from '../todo/todos'

export const listTodos = createAction('[Todo Component] List Todos',props<{alltodos:Todo[]}>());
