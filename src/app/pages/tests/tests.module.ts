import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { TestInputsComponent } from './test-inputs/test-inputs.component';
import { TestLayoutsComponent } from './test-layouts/test-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    TestsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    TestsComponent,
    ButtonsComponent,
    TestInputsComponent,
    TestLayoutsComponent,
    DatepickerComponent,
  ],
})
export class TestsModule { }
