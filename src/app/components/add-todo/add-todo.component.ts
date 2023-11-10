import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  name = '';
  description: string = '';

  @Output() add = new EventEmitter<{ name: string, description: string }>();

  addTodo(): void {
    if (this.name.trim() !== '' && this.description.trim() !== '') {
      this.add.emit({ name: this.name.trim(), description: this.description.trim() });
      this.name = '';
      this.description = '';
    }
  }
}
