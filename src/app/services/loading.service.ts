import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * @class LoadingService
 * @description
 * Service for managing loading state by tracking the number of active HTTP requests.
 * It provides methods to handle requests by incrementing and decrementing a counter,
 * and exposes an observable to determine whether to display a loading spinner.
 */
export class LoadingService {
  /**
   * Counter to track the number of active HTTP requests.
   * @type {number}
   */
  numberOfRequests: number = 0;

  /**
   * BehaviorSubject to emit the loading state (whether to display a spinner) to subscribers.
   * @type {BehaviorSubject<boolean>}
   */
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Method to handle HTTP requests by incrementing or decrementing the loading counter.
   * It updates the `showSpinner` observable accordingly.
   * @param {string} state - The state of the request ('plus' to increment, 'minus' to decrement).
   */
  handleRequest = (state: string = 'minus'): void => {
    this.numberOfRequests = (state === 'plus') ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  }

  /**
  * Method to check if there are active loading requests.
  * @returns {boolean} - True if there are active loading requests, otherwise false.
  */
  isLoading(): boolean {
    return this.showSpinner.value;
  }
}
