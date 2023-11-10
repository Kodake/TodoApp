import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private myAppUrl = environment.apiUrl;
  private myApiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.myAppUrl}/${this.myApiUrl}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.myAppUrl}/${this.myApiUrl}`, todo);
  }

  checkTodo(id: number, changes: Partial<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(`${this.myAppUrl}/${this.myApiUrl}/${id}`, changes)
      .pipe(
        map(updatedTodo => {
          return updatedTodo;
        })
      );
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${id}`);
  }
}
