import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  id = 0;
  name = '';
  completed = false;
  todos: Todo[] = [];

  constructor(public todoService: TodoService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  addTodo(todoName: string) {
    const todo = {
      name: todoName,
      completed: false
    };

    this.todoService.addTodo(todo).subscribe(
      () => {
        this.toastr.success('Todo Added', 'The todo was successfully added');
        this.todoService.getTodos().subscribe((data: Todo[]) => {
          this.todos = data;
        });
      },
      (error) => {
        console.error('Error adding todo', error);
        this.toastr.error('Error adding todo', 'An error occurred');
      }
    );
  }

  checkTodo(isChecked: boolean, id: number) {
    const updatedTodo = { ...this.todos.find(todo => todo.id === id), completed: isChecked };
    this.todoService.checkTodo(id, updatedTodo).subscribe(
      () => {
        if (isChecked) {
          this.toastr.success('Todo Completed', 'The todo was successfully completed');
        } else {
          this.toastr.warning('Todo Uncompleted', 'The todo was successfully marked as uncompleted');
        }

        this.updateTodoList(updatedTodo);
      },
      (error) => {
        console.error('Error updating todo', error);
        this.toastr.error('Error updating todo', 'An error occurred');
      }
    );
  }


  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.toastr.warning('Todo Deleted', 'The todo was successfully deleted');
        this.removeTodoFromList(id);
      },
      (error) => {
        console.error('Error deleting todo', error);
        this.toastr.error('Error deleting todo', 'An error occurred');
      }
    );
  }

  private updateTodoList(updatedTodo: Todo) {
    const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  private removeTodoFromList(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
