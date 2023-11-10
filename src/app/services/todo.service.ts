import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private myAppUrl = 'http://localhost:3000';
  private myApiUrl = 'todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.myAppUrl}/${this.myApiUrl}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.myAppUrl}/${this.myApiUrl}`, todo);
  }

  checkTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.myAppUrl}/${this.myApiUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${id}`);
  }
}
