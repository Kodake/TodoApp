import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {
  constructor(
    public loadingService: LoadingService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.handleRequest('plus');
    return next
      .handle(request)
      .pipe(
        finalize(this.finalize.bind(this))
      );
  }

  finalize = (): void => this.loadingService.handleRequest();
}
