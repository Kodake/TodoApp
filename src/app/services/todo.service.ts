import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * @class TodoService
 * @description
 * Service for managing CRUD operations related to todos using HTTP requests.
 */
export class TodoService {

  /**
   * Base URL for the API endpoint.
   * @type {string}
   */
  private myAppUrl: string = environment.apiUrl;

  /**
   * API endpoint for todos.
   * @type {string}
   */
  private myApiUrl: string = environment.apiEndpoint;

  /**
   * Constructor for the TodoService.
   * @param {HttpClient} http - Angular HTTP client for making requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves all todos from the server.
   * @returns {Observable<Todo[]>} - An observable of the retrieved todos.
   */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.myAppUrl}/${this.myApiUrl}`);
  }

  /**
   * Adds a new todo to the server.
   * @param {Todo} todo - The todo object to be added.
   * @returns {Observable<Todo>} - An observable of the added todo.
   */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.myAppUrl}/${this.myApiUrl}`, todo);
  }

  /**
   * Updates the completion status of a todo on the server.
   * @param {number} id - The ID of the todo to be updated.
   * @param {Partial<Todo>} changes - The changes to be applied to the todo.
   * @returns {Observable<Todo>} - An observable of the updated todo.
   */
  checkTodo(id: number, changes: Partial<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(`${this.myAppUrl}/${this.myApiUrl}/${id}`, changes)
      .pipe(
        map(updatedTodo => {
          return updatedTodo;
        })
      );
  }

  /**
   * Deletes a todo from the server.
   * @param {number} id - The ID of the todo to be deleted.
   * @returns {Observable<void>} - An observable indicating the success of the deletion.
   */
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${id}`);
  }
}
