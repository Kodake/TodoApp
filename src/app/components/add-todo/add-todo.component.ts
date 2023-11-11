import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

/**
 * @component AddTodoComponent
 * @description
 * This component provides a form for adding a new todo item. It captures the name and description of the todo
 * and emits an event when the user adds a new todo, allowing the parent component to handle the addition logic.
 */
export class AddTodoComponent {
  /**
   * Property for capturing the name of the new todo.
   * @type {string}
   * @default `''`
   */
  name: string = '';

    /**
   * Property for capturing the description of the new todo.
   * @type {string}
   * @default `''`
   */
  description: string = '';

  /**
   * Output event emitter for notifying the parent component when a new todo is added.
   * Emits an object containing the name and description of the new todo.
   * @type {EventEmitter<{ name: string, description: string }>}
   */
  @Output() add: EventEmitter<{ name: string; description: string; }> = new EventEmitter<{ name: string, description: string }>();

  /**
   * Handles the addition of a new todo. Emits the `add` event if the name and description are not empty,
   * then resets the input fields.
   */
  addTodo(): void {
    if (this.name.trim() !== '' && this.description.trim() !== '') {
      this.add.emit({ name: this.name.trim(), description: this.description.trim() });
      this.name = '';
      this.description = '';
    }
  }
}
