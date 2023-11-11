import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})

/**
 * @component DeleteTodoComponent
 * @description
 * This component provides a confirmation dialog for deleting a todo item. It utilizes the SweetAlert2 library
 * for displaying a customizable confirmation modal. It allows users to confirm or cancel the deletion and emits
 * the delete event when confirmed.
 */
export class DeleteTodoComponent {
  /**
   * Input property for passing the ID of the todo item to be deleted.
   * @type {number | undefined}
   */
  @Input() todoId?: number;

  /**
   * Output event emitter for notifying the parent component when the user confirms the deletion.
   * Emits the ID of the deleted todo.
   * @type {EventEmitter<number>}
   */
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Opens a confirmation dialog using SweetAlert2 when called. Emits the delete event if the user confirms the deletion.
   */
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
         // Emit the delete event with the todo ID when confirmed.
        this.delete.emit(this.todoId);

        // Display a success message after successful deletion.
        Swal.fire({
          title: "Deleted!",
          text: "Your todo has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
