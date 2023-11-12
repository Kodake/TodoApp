import { addTodoSuccess, checkTodoSuccess, deleteTodoSuccess } from '../store/todo/todo.actions';
import { Todo } from 'src/app/models/todo.model';

describe('Todo Actions', () => {
    describe('addTodoSuccess', () => {
        it('should create an action for addTodoSuccess of a todo', () => {
            const addedTodo: Todo = { id: 1, name: 'New Todo', description: 'Todo Description', completed: false };
            const action = addTodoSuccess({ todo: addedTodo });

            expect(action.type).toBe('[Todo] Add Todo Success');
            expect(action.todo).toEqual(addedTodo);
        });
    });

    describe('deleteTodoSuccess', () => {
        it('should create an action for deleteTodoSuccess of a todo', () => {
            const deletedTodoId = 1;
            const action = deleteTodoSuccess({ id: deletedTodoId });

            expect(action.type).toBe('[Todo] Delete Todo Success');
            expect(action.id).toEqual(deletedTodoId);
        });
    });

    describe('checkTodoSuccess', () => {
        it('should create an action for checkTodoSuccess of a todo', () => {
            const updatedTodo: Todo = { id: 1, name: 'Updated Todo', description: 'Todo Description', completed: true };
            const action = checkTodoSuccess({ updatedTodo });

            expect(action.type).toBe('[Todo] Check Todo Success');
            expect(action.updatedTodo).toEqual(updatedTodo);
        });
    });
});
