import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../../todo/models/todo'
import { AppState, initialState } from '../todo.state'
import { getTodosReq, getTodosSuccess, getTodosFail } from '../actions/todo.actions';

export const todosReducer=createReducer(
  initialState,
  on(getTodosReq,(state)=>{
    console.log("start to fetch data");
    return {
      ...state,
      todosLoading:true
    }
  }),

  on(getTodosSuccess,(state, {fetchedTodos})=>{
    var todos:Todo[]=[];
    fetchedTodos.forEach(item=>{
      let todo:Todo = JSON.parse(item.description);
          todo.completed=item.completed;
          todo._id= item._id;  
          todos.push(todo); 
         
    });
    return {
      ...state,
      todos:todos,
      todosLoading:false
    }
  }),

  // eslint-disable-next-line ngrx/on-function-explicit-return-type
  on(getTodosFail,(state,{error})=>{
    return {
      ...state,
      todosError: error,
      todosLoading: false
    }
  })

)

