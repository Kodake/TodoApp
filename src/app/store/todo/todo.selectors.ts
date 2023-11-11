import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState, todoAdapter } from './todo.state';

/**
 * @constant {createFeatureSelector<TodoState>} selectTodoState
 * @description
 * Selector function to retrieve the `TodoState` from the NgRx store.
 *
 * @usage
 * 1. Use this selector to access the `TodoState` in component or service files.
 * ```typescript
 * const todoState = selectTodoState(state);
 */
export const selectTodoState = createFeatureSelector<TodoState>('todo');

/**
 * @constant {createSelector<TodoState, Todo[]>} selectAllTodos
 * @description
 * Selector function to retrieve all todos from the `TodoState` using the entity adapter's `selectAll` method.
 *
 * @usage
 * 1. Use this selector to get all todos from the NgRx store.
 * ```typescript
 * const allTodos = selectAllTodos(state);
 */
export const selectAllTodos = createSelector(
  selectTodoState,
  todoAdapter.getSelectors().selectAll
);

/**
 * @constant {createSelector<Todo[], Todo[]>} selectTodos
 * @description
 * Selector function to retrieve all todos directly from the `selectAllTodos` selector.
 *
 * @usage
 * 1. Use this selector when you want to directly access the array of todos.
 * ```typescript
 * const todos = selectTodos(state);
 */
export const selectTodos = createSelector(
  selectAllTodos,
  (todos) => todos
);
