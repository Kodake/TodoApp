import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  name = '';

  @Output() add = new EventEmitter<string>();

  addTodo(): void {
    if (this.name.trim() !== '') {
      this.add.emit(this.name);
      this.name = '';
    }
  }
}
