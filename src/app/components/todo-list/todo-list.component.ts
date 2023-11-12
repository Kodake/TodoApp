import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.state';
import * as TodoActions from '../../store/todo/todo.actions';
import { ToastrService } from 'ngx-toastr';
import { addTodoAnimation, headerTodoAnimation, noTodoAnimation } from 'src/app/animations/todo.animation';
import { TodoService } from 'src/app/services/todo.service';
import { selectTodos } from 'src/app/store/todo/todo.selectors';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [addTodoAnimation, headerTodoAnimation, noTodoAnimation],
})

/**
 * @component TodoListComponent
 * @description
 * This component manages the display and interaction with a list of todos. It interacts with the TodoService for data retrieval and modification,
 * and uses the NgRx store to manage the state of the todos.
 */

export class TodoListComponent implements OnInit {
  /**
   * Observable that holds the current state of the todos in the store.
   * @type {Observable<Todo[]>}
   */
  todos$: Observable<Todo[]> = this.store.select(selectTodos);

  /**
   * Constructor for the TodoListComponent.
   * @param {TodoService} todoService - Service for managing todo data.
   * @param {ToastrService} toastr - Service for displaying toast notifications.
   * @param {Store<TodoState>} store - NgRx store for managing the state of todos.
   */
  constructor(
    public todoService: TodoService,
    public toastr: ToastrService,
    private store: Store<TodoState>
  ) { }

  /**
   * Lifecycle hook called after component initialization.
   * Fetches the initial set of todos when the component is loaded.
   */
  ngOnInit() {
    this.getTodos();
  }

  /**
   * Fetches todos from the NgRx store by dispatching a loadTodos action.
   */
  getTodos() {
    this.todos$ = this.store.select(selectTodos);
    this.store.dispatch(TodoActions.loadTodos());
  }

  /**
   * Adds a new todo to the NgRx store by dispatching an addTodo action.
   * Displays a success toast notification upon successful addition.
   * @param {Object} todoData - Data for the new todo (name, description).
   */
  addTodo(todoData: { name: string, description: string }) {
    const todo = {
      name: todoData.name,
      description: todoData.description,
      completed: false
    };

    this.store.dispatch(TodoActions.addTodo({ todo }));

    this.toastr.success('Todo Added', 'The todo was successfully added');
  }

  /**
   * Deletes a todo from the NgRx store by dispatching a deleteTodo action.
   * Displays a warning toast notification upon successful deletion.
   * @param {number} id - ID of the todo to be deleted.
   */
  deleteTodo(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));

    this.toastr.warning('Todo Deleted', 'The todo was successfully deleted');
  }

  /**
   * Updates the completion status of a todo in the NgRx store by dispatching a checkTodo action.
   * Displays success or warning toast notification based on the completion status.
   * @param {boolean} isChecked - New completion status of the todo.
   * @param {number} id - ID of the todo to be updated.
   */
  checkTodo(isChecked: boolean, id: number) {
    this.store.dispatch(TodoActions.checkTodo({ id, isChecked }));

    if (isChecked) {
      this.toastr.success('Todo Completed', 'The todo was successfully completed');
    } else {
      this.toastr.warning('Todo Uncompleted', 'The todo was successfully marked as uncompleted');
    }
  }
}
