import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestCreatedComponent } from './test-created/test-created.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      {
        path: 'create',
        component: TestCreateComponent,
      },
      {
        path: 'created',
        component: TestCreatedComponent,
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

