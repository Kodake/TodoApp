import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.state';
import * as TodoActions from '../../store/todo/todo.actions';
import { ToastrService } from 'ngx-toastr';
import { addTodoAnimation, headerTodoAnimation, noTodoAnimation } from 'src/app/animations/todo.animation';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { selectTodos } from 'src/app/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [addTodoAnimation, headerTodoAnimation, noTodoAnimation],
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.select(selectTodos);

  constructor(
    public todoService: TodoService,
    public toastr: ToastrService,
    private store: Store<TodoState>
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos$ = this.store.select(selectTodos);
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo(todoData: { name: string, description: string }) {
    const todo = {
      name: todoData.name,
      description: todoData.description,
      completed: false
    };

    this.store.dispatch(TodoActions.addTodo({ todo }));

    this.toastr.success('Todo Added', 'The todo was successfully added');
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));

    this.toastr.warning('Todo Deleted', 'The todo was successfully deleted');
  }

  checkTodo(isChecked: boolean, id: number) {
    this.store.dispatch(TodoActions.checkTodo({ id, isChecked }));

    if (isChecked) {
      this.toastr.success('Todo Completed', 'The todo was successfully completed');
    } else {
      this.toastr.warning('Todo Uncompleted', 'The todo was successfully marked as uncompleted');
    }
  }
}
