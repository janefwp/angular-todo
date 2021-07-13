import { Action, createReducer, on } from '@ngrx/store';
import { listTodos} from './todo.actions';
import { Todo } from '../todo/todos'
import { TodoState } from './todo.state'
import { state } from '@angular/animations';

export const initialState: ReadonlyArray<Todo> = [];
// export const initialState: TodoState = {
//   todos:[]
// };
export const todosReducer=createReducer(
  initialState,
  on(listTodos,(state,{alltodos})=>( [...alltodos]))
)

// const _todoReducer = createReducer(
//   initialState,
//   on(listTodos, (state, { alltodos} ) => ({
//     todos: alltodos,
//   }))

// );

// export function todosReducer(state:TodoState, action:Action) {
//   return _todoReducer(state, action);
// }