import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState, todoAdapter } from './todo.state';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectAllTodos = createSelector(
  selectTodoState,
  todoAdapter.getSelectors().selectAll
);

export const selectTodos = createSelector(
  selectAllTodos,
  (todos) => todos
);
