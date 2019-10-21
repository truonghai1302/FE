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
import { TagInputModule } from 'ngx-chips';
import { ThemeModule } from '../../@theme/theme.module';
import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestCreatedComponent } from './test-created/test-created.component';
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
    TagInputModule,
  ],
  declarations: [
    TestsComponent,
    ButtonsComponent,
    TestCreateComponent,
    TestCreatedComponent,
    DatepickerComponent,
  ],
})
export class TestsModule { }
