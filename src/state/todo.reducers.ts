import { Action, createReducer, on } from '@ngrx/store';
import { listTodos} from './todo.actions';
import { Todo } from '../todo/todos'

export const initialState: Array<Todo> = [];

const _todoReducer = createReducer(
  initialState,
  on(listTodos, (state,{todos}) => todos)

);

export function todoReducer(state:Todo[], action:Action) {
  return _todoReducer(state, action);
}