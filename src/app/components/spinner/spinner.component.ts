import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

/**
 * @component SpinnerComponent
 * @description
 * This component manages the display and control of a spinner to indicate loading or processing states.
 * It integrates with the `LoadingService` for communication of loading state changes and utilizes the `NgxSpinnerService`
 * for showing and hiding the spinner.
 */
export class SpinnerComponent {
  /**
   * Flag indicating whether the spinner is currently active (visible).
   * @type {boolean}
   */
  spinnerActive: boolean = true;

  /**
   * Constructor for the SpinnerComponent.
   * @param {LoadingService} loadingService - Service for managing loading state changes.
   * @param {NgxSpinnerService} ngxSpinnerService - Service for controlling the display of the spinner.
   */
  constructor(
    public loadingService: LoadingService,
    public ngxSpinnerService: NgxSpinnerService
  ) {
    // Subscribe to the showSpinner event in the LoadingService to update the spinner state.
    this.loadingService.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  /**
   * Callback function subscribed to the showSpinner event in the LoadingService.
   * Updates the spinner state and triggers the display of the spinner through the NgxSpinnerService.
   * @param {boolean} state - New loading state.
   */
  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;

    // Use NgxSpinnerService to show or hide the spinner based on the loading state.
    if (state) {
      this.ngxSpinnerService.show();
    } else {
      this.ngxSpinnerService.hide();
    }
  }
}
