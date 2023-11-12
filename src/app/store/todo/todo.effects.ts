import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { TodoService } from 'src/app/services/todo.service';

/**
 * @class TodoEffects
 * @description
 * NgRx effects for handling asynchronous actions related to todos.
 */
@Injectable()
export class TodoEffects {
    /**
     * Effect to handle the loading of todos from the server.
     */
    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            switchMap(() =>
                this.todoService.getTodos().pipe(
                    map((todos) => TodoActions.loadTodosSuccess({ todos })),
                    catchError((error) => of(TodoActions.loadTodosFailure({ error })))
                )
            )
        )
    );

    /**
     * Effect to handle the addition of a new todo.
     */
    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            switchMap((action) =>
                this.todoService.addTodo(action.todo).pipe(
                    map((todo) => TodoActions.addTodoSuccess({ todo })),
                    catchError((error) => of(TodoActions.addTodoFailure({ error })))
                )
            )
        )
    );

    /**
     * Effect to handle the deletion of a todo.
     */
    deleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            switchMap((action) =>
                this.todoService.deleteTodo(action.id).pipe(
                    map(() => TodoActions.deleteTodoSuccess({ id: action.id })),
                    catchError((error) => of(TodoActions.deleteTodoFailure({ error })))
                )
            )
        )
    );

    /**
     * Effect to handle the updating of a todo's completion status.
     */
    checkTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.checkTodo),
            switchMap((action) =>
                this.todoService.checkTodo(action.id, { completed: action.isChecked }).pipe(
                    map((updatedTodo) => TodoActions.checkTodoSuccess({ updatedTodo })),
                    catchError((error) => of(TodoActions.checkTodoFailure({ error })))
                )
            )
        )
    );

    /**
     * Constructor for the TodoEffects.
     * @param {Actions} actions$ - NgRx actions observable.
     * @param {TodoService} todoService - Service for interacting with the todo API.
     */
    constructor(private actions$: Actions, private todoService: TodoService) { }
}
