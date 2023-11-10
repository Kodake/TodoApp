// todo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { TodoService } from 'src/app/services/todo.service';

@Injectable()
export class TodoEffects {
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

    constructor(private actions$: Actions, private todoService: TodoService) { }
}
