import { todoReducer } from '../store/todo/todo.reducer';
import * as TodoActions from '../store/todo/todo.actions';
import { initialState, todoAdapter } from '../store/todo/todo.state';

describe('Todo Reducer', () => {
    describe('addTodoSuccess', () => {
        it('should add a new todo when addTodoSuccess action is dispatched', () => {
            const newTodo = { id: 1, title: 'New Todo', description: 'Todo Description', completed: false };
            const action = TodoActions.addTodoSuccess({ todo: newTodo });

            const newState = todoReducer(initialState, action);

            const expectedState = todoAdapter.addOne(newTodo, initialState);

            expect(newState).toEqual(expectedState);
        });
    });

    describe('addTodoFailure', () => {
        it('should not change state on addTodoFailure action', () => {
            const initialTodos = [
                { id: 1, title: 'Todo 1', completed: false },
                { id: 2, title: 'Todo 2', completed: true },
            ];

            const initialState = todoAdapter.setAll(initialTodos, todoAdapter.getInitialState());

            const error = { message: 'Failed to add todo' };
            const action = TodoActions.addTodoFailure({ error });

            const newState = todoReducer(initialState, action);

            expect(newState).toEqual(initialState);
        });
    });

    describe('loadTodosSuccess', () => {
        it('should set all todos when loadTodosSuccess action is dispatched', () => {
            const initialTodos = [
                { id: 1, title: 'Todo 1', description: 'Todo 1 Description', completed: false },
                { id: 2, title: 'Todo 2', description: 'Todo 2 Description', completed: true },
            ];

            const initialState = todoAdapter.setAll(initialTodos, todoAdapter.getInitialState());

            const newTodos = [
                { id: 3, title: 'Todo 3 Description', completed: false },
                { id: 4, title: 'Todo 4 Description', completed: true },
            ];

            const action = TodoActions.loadTodosSuccess({ todos: newTodos });

            const newState = todoReducer(initialState, action);

            const expectedState = todoAdapter.setAll(newTodos, initialState);

            expect(newState).toEqual(expectedState);
        });
    });
});
