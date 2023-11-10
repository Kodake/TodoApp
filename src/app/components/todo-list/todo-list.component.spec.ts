import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TodoEffects } from '../../store/todo/todo.effects';
import * as TodoActions from '../../store/todo/todo.actions';
import { initialState, todoReducer } from '../../store/todo/todo.reducer';
import { TodoService } from '../../services/todo.service';

describe('Todo Effects', () => {
  let effects: TodoEffects;
  let actions$: Observable<any>;

  const mockTodoService = jasmine.createSpyObj('TodoService', ['getTodos']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        { provide: TodoService, useValue: mockTodoService }
      ],
    });

    effects = TestBed.inject(TodoEffects);
  });

  it('should dispatch Load Todos Success action on successful loadTodos', () => {
    const todos = [{ id: 1, name: 'Todo 1', completed: false }];

    mockTodoService.getTodos.and.returnValue(of(todos));

    actions$ = of(TodoActions.loadTodos());

    effects.loadTodos$.subscribe((action: any) => {
      expect(action).toEqual(TodoActions.loadTodosSuccess({ todos }));
    });
  });

  it('should dispatch Add Todo Success action on successful addTodo', () => {
    const todo = { id: 1, name: 'Todo 1', completed: false };

    mockTodoService.addTodo.and.returnValue(of(todo));

    actions$ = of(TodoActions.addTodo({ todo }));

    effects.addTodo$.subscribe(action => {
      expect(action).toEqual(TodoActions.addTodoSuccess({ todo }));
    });
  });

  it('should update a todo on checkTodoSuccess', () => {
    const initialStateWithTodo = {
      ...initialState,
      ids: [1],
      entities: {
        1: { id: 1, name: 'Todo 1', completed: false },
      },
    };

    const updatedTodo = { id: 1, name: 'Todo 1', completed: true };
    const action = TodoActions.checkTodoSuccess({ updatedTodo });
    const state = todoReducer(initialStateWithTodo, action);

    expect(state.entities[1]).toEqual(updatedTodo);
  });
});
