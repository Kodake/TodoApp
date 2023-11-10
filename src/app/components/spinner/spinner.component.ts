import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  spinnerActive = true;

  constructor(
    public loadingService: LoadingService,
    public ngxSpinnerService: NgxSpinnerService
  ) {
    this.loadingService.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
    this.ngxSpinnerService.show();
  }
}
