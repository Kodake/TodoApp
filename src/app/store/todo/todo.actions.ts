import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

/**
 * @constant {Action} loadTodos
 * @description
 * Action to trigger the loading of todos from the server.
 *
 * @usage
 * 1. Dispatch this action to initiate the loading of todos.
 * ```typescript
 * store.dispatch(loadTodos());
 */
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{ error: any }>());

/**
 * @constant {Action} addTodo
 * @description
 * Action to trigger the addition of a new todo.
 *
 * @param {Todo} todo - The todo to be added.
 *
 * @usage
 * 1. Dispatch this action to add a new todo.
 * ```typescript
 * store.dispatch(addTodo({ todo }));
 */
export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const addTodoSuccess = createAction('[Todo] Add Todo Success', props<{ todo: Todo }>());
export const addTodoFailure = createAction('[Todo] Add Todo Failure', props<{ error: any }>());

/**
 * @constant {Action} deleteTodo
 * @description
 * Action to trigger the deletion of a todo.
 *
 * @param {number} id - The ID of the todo to be deleted.
 *
 * @usage
 * 1. Dispatch this action to delete a todo.
 * ```typescript
 * store.dispatch(deleteTodo({ id }));
 */
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success', props<{ id: number }>());
export const deleteTodoFailure = createAction('[Todo] Delete Todo Failure', props<{ error: any }>());

/**
 * @constant {Action} checkTodo
 * @description
 * Action to trigger the updating of a todo's completion status.
 *
 * @param {number} id - The ID of the todo to be updated.
 * @param {boolean} isChecked - The new completion status.
 *
 * @usage
 * 1. Dispatch this action to update a todo's completion status.
 * ```typescript
 * store.dispatch(checkTodo({ id, isChecked }));
 */
export const checkTodo = createAction('[Todo] Check Todo', props<{ id: number; isChecked: boolean }>());
export const checkTodoSuccess = createAction('[Todo] Check Todo Success', props<{ updatedTodo: Todo }>());
export const checkTodoFailure = createAction('[Todo] Check Todo Failure', props<{ error: any }>());