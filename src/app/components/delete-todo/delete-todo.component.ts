import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent {
  @Input() todoId?: number;
  @Output() delete = new EventEmitter<number>();

  confirmDelete(): void {
    Swal.fire({
      title: "Are you sure to delete this todo?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete.emit(this.todoId);
        Swal.fire({
          title: "Deleted!",
          text: "Your todo has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
