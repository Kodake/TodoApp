import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from 'src/app/models/todo.model';

/**
 * @interface TodoState
 * @description
 * Represents the state of todos in the NgRx store using the EntityState.
 *
 * @extends EntityState<Todo>
 *
 * @usage
 * 1. Use this state interface in NgRx selectors to manage and retrieve todos.
 * ```typescript
 * const selectTodoState = createFeatureSelector<TodoState>('todos');
 * const { selectAll } = todoAdapter.getSelectors();
 * const selectAllTodos = createSelector(selectTodoState, selectAll);
 */
export interface TodoState extends EntityState<Todo> { }

/**
 * Entity adapter for managing todos in the NgRx store.
 * @type {EntityAdapter<Todo>}
 */
export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

/**
 * Initial state for the todos in the NgRx store.
 * @type {TodoState}
 */
export const initialState: TodoState = todoAdapter.getInitialState();
