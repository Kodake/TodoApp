import { createReducer, on } from '@ngrx/store';
import { initialState, todoAdapter } from './todo.state';
import * as TodoActions from './todo.actions';

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.addTodoSuccess, (state, { todo }) => todoAdapter.addOne(todo, state)),
    on(TodoActions.loadTodosSuccess, (state, { todos }) => todoAdapter.setAll(todos, state)),
    on(TodoActions.deleteTodoSuccess, (state, { id }) => todoAdapter.removeOne(id, state)),
    on(TodoActions.checkTodoSuccess, (state, { updatedTodo }) =>
        todoAdapter.updateOne({ id: updatedTodo.id as number, changes: updatedTodo }, state)
    ),
);
export { initialState };

