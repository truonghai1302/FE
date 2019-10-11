import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests.component';
import { TestInputsComponent } from './test-inputs/test-inputs.component';
import { TestLayoutsComponent } from './test-layouts/test-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      {
        path: 'creating',
        component: TestInputsComponent,
      },
      {
        path: 'layouts',
        component: TestLayoutsComponent,
      },
      {
        path: 'layouts',
        component: TestLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TestsRoutingModule {
}

