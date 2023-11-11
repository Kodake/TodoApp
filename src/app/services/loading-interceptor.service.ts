import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @class LoadingInterceptorService
 * @description
 * Angular HTTP interceptor that manages loading state by utilizing the LoadingService.
 * It increments the loading counter when a request is made and decrements it when the response is received.
 */
export class LoadingInterceptorService {
  constructor(
    public loadingService: LoadingService
  ) { }

  /**
   * Intercepts HTTP requests and manages loading state by incrementing and decrementing the loading counter.
   * @param {HttpRequest<unknown>} request - The intercepted HTTP request.
   * @param {HttpHandler} next - The next handler in the HTTP interceptor chain.
   * @returns {Observable<HttpEvent<unknown>>} - An observable of the HTTP event stream.
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Increment the loading counter before making the request.
    this.loadingService.handleRequest('plus');

    // Continue with the HTTP request and handle the response.
    return next
      .handle(request)
      .pipe(
        // Decrement the loading counter when the response is received.
        finalize(this.finalize.bind(this))
      );
  }

  /**
   * Callback function for finalizing the HTTP request by decrementing the loading counter.
   */
  finalize = (): void => this.loadingService.handleRequest();
}
