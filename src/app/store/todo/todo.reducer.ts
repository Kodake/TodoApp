import { createReducer, on } from '@ngrx/store';
import { initialState, todoAdapter } from './todo.state';
import * as TodoActions from './todo.actions';

/**
 * @constant {Reducer<TodoState>} todoReducer
 * @description
 * NgRx reducer function for managing the state of todos based on dispatched actions.
 *
 * @param {TodoState} state - The current state of the todos.
 * @param {Action} action - The dispatched action to handle.
 * @returns {TodoState} - The updated state after handling the action.
 *
 * @usage
 * 1. Use this reducer in the NgRx store to manage the state of todos.
 * ```typescript
 * const newState = todoReducer(state, someAction);
 */
export const todoReducer = createReducer(
    initialState,
    on(TodoActions.addTodoSuccess, (state, { todo }) => todoAdapter.addOne(todo, state)),
    on(TodoActions.loadTodosSuccess, (state, { todos }) => todoAdapter.setAll(todos, state)),
    on(TodoActions.deleteTodoSuccess, (state, { id }) => todoAdapter.removeOne(id, state)),
    on(TodoActions.checkTodoSuccess, (state, { updatedTodo }) =>
        todoAdapter.updateOne({ id: updatedTodo.id as number, changes: updatedTodo }, state)
    ),
);

/**
 * @constant {TodoState} initialState
 * @description
 * Initial state for the todos in the NgRx store.
 *
 * @usage
 * 1. Use this constant to provide the initial state when configuring the NgRx store.
 * ```typescript
 * StoreModule.forRoot({ todo: todoReducer });
 */
export { initialState };

