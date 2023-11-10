import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  numberOfRequests = 0;
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private handleTimeout: any;  // Use 'any' to allow storing the timeout identifier

  handleRequest = (state: string = 'minus', timeoutDuration: number = 2000): void => {
    this.numberOfRequests = (state === 'plus') ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);

    // Clear any existing timeout
    if (this.handleTimeout) {
      clearTimeout(this.handleTimeout);
    }

    // Set a new timeout to hide the spinner after the specified duration
    this.handleTimeout = setTimeout(() => {
      this.showSpinner.next(this.numberOfRequests > 0);
    }, timeoutDuration);
  }
}
