import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-todo',
  templateUrl: './check-todo.component.html',
  styleUrls: ['./check-todo.component.css']
})
export class CheckTodoComponent {
  @Input() isChecked? = false;
  @Output() checkChange = new EventEmitter<boolean>();

  toggleCheck(): void {
    this.isChecked = !this.isChecked;
    this.checkChange.emit(this.isChecked);
  }
}
