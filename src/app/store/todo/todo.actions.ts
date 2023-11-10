import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{ error: any }>());

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const addTodoSuccess = createAction('[Todo] Add Todo Success', props<{ todo: Todo }>());
export const addTodoFailure = createAction('[Todo] Add Todo Failure', props<{ error: any }>());

export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success', props<{ id: number }>());
export const deleteTodoFailure = createAction('[Todo] Delete Todo Failure', props<{ error: any }>());

export const checkTodo = createAction('[Todo] Check Todo', props<{ id: number; isChecked: boolean }>());
export const checkTodoSuccess = createAction('[Todo] Check Todo Success', props<{ updatedTodo: Todo }>());
export const checkTodoFailure = createAction('[Todo] Check Todo Failure', props<{ error: any }>());