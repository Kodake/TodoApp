import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-todo',
  templateUrl: './check-todo.component.html',
  styleUrls: ['./check-todo.component.css']
})

/**
 * @component CheckTodoComponent
 * @description
 * This component provides a checkbox for toggling the completion status of a todo item.
 * It emits an event when the checkbox state changes, allowing the parent component to handle the updated completion status.
 */
export class CheckTodoComponent {
  /**
   * Input property for passing the initial completion status of the todo item.
   * @type {boolean}
   * @default `false`
   */
  @Input() isChecked?: boolean = false;

  /**
   * Output event emitter for notifying the parent component when the checkbox state changes.
   * Emits the updated completion status.
   * @type {EventEmitter<boolean>}
   */
  @Output() checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Toggles the completion status of the todo item and emits the `checkChange` event.
   */
  toggleCheck(): void {
    // Toggle the completion status.
    this.isChecked = !this.isChecked;

    // Emit the updated completion status.
    this.checkChange.emit(this.isChecked);
  }
}
