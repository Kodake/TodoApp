import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from 'src/app/models/todo.model';

export interface TodoState extends EntityState<Todo> {
  // Additional state properties if needed
}

export const todoAdapter = createEntityAdapter<Todo>();
export const initialState: TodoState = todoAdapter.getInitialState();
