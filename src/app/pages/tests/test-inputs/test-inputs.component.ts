import { Component } from '@angular/core';

@Component({
  selector: 'ngx-test-inputs',
  styleUrls: ['./test-inputs.component.scss'],
  templateUrl: './test-inputs.component.html',
})
export class TestInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}
