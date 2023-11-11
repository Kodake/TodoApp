import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo?: Todo;

  showDetails(): void {
    Swal.fire({
      title: `${this.todo?.name}`,
      text: `${this.todo?.description}`,
      icon: "info"
    });
  }
}
