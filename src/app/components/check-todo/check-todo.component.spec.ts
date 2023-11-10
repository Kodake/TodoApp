import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTodoComponent } from './check-todo.component';

describe('CheckTodoComponent', () => {
  let component: CheckTodoComponent;
  let fixture: ComponentFixture<CheckTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckTodoComponent]
    });
    fixture = TestBed.createComponent(CheckTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
