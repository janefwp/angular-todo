import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../../todo/models/todo'
import { AppState, initialState } from '../todo.state'
import { getTodosReq, getTodosSuccess, getTodosFail, addTodoSuccess, addTodoFail, delTodoReq, delTodoSuccess, delTodoFail, updateTodoReq, updateTodoSuccess, updateTodoFail, addTodoReq } from '../actions/todo.actions';
import { tsStructureIsReused } from '@angular/compiler-cli/src/transformers/util';

export const todosReducer = createReducer(
  initialState,
  on(getTodosReq,(state):AppState=>{
    return {
      ...state,
      todosLoading:true
    }
  }),

  on(getTodosSuccess,(state, {fetchedTodos}):AppState=>{
    var todos:Todo[]=[];
    fetchedTodos.forEach(item=>{
      let todo:Todo = JSON.parse(item.description);
          todo.completed=item.completed;
          todo._id= item._id;  
          todos.push(todo);         
    });
    return {
      ...state,
      todos: todos,
      todosLoading: false,
      isListSuccess: true,
    }
  }),


  on(getTodosFail,(state,{error}):AppState=>{
    return {
      ...state,
      todosError: error,
      todosLoading: false,
      isListSuccess: false,
    }
  }),

  on(addTodoReq,(state,{todo}):AppState=>{
    return {
      ...state,
      todosLoading: true
    }
  }),

  on(addTodoSuccess,(state,{addedTodo}):AppState=>{
    console.log(addedTodo)
    let todo:Todo = JSON.parse(addedTodo.description);
    
    todo._id = addedTodo._id;
    todo.completed = addedTodo.completed;
    console.log(todo)
    return {
      ...state,
      todos: [...state.todos,todo],
      todosLoading: false,
      isAddSuccess: true,
    }
  }),
  on(addTodoFail,(state,{error}):AppState=>{
    return {
      ...state,
      todosLoading: false,
      isAddSuccess: false,
      todosError: error
    }
  }),

  on(delTodoReq,(state,{todo}):AppState=>{
    console.log(todo)
    return {
      ...state,
      todosLoading: true
    }
  }),
  on(delTodoSuccess,(state,{deledTodo}): AppState=>{
    return {
      ...state,
      todos: state.todos.filter((item=>item._id!==deledTodo._id)),
      todosLoading: false,
      isDelSuccess: true
    }
  }),

  on(delTodoFail,(state,{error}):AppState=>{
    return {
      ...state,
      isDelSuccess: false,
      todosError: error
    }
  }),
  on(updateTodoReq,(state,{todo,completed}):AppState=>{
    return {
      ...state,
      todosLoading: true
    }
  }),
  on(updateTodoSuccess,(state,{todo,completed}):AppState=>{
    return {
      ...state,
      todosLoading: false,
      isUpdateSuccess: true,
    }
  }),
  on(updateTodoFail,(state,{error}):AppState=>{
    return {
      ...state,
      isUpdateSuccess: false,
      todosError: "",
      todosLoading: false
    }
  }),

)

