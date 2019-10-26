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
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ManageTopicComponent } from './manage-topic/manage-topic.component';
import { ManageQuestionComponent } from './manage-question/manage-question.component';
import { CreateTopicComponent } from './manage-topic/create-topic/create-topic.component';
import { ManageTestComponent } from './manage-test/manage-test.component';
import { AddTestComponent } from './manage-test/add-test/add-test.component';
import { AddQuestionComponent } from './manage-question/add-question/add-question.component';


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
    ManageRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    TagInputModule,
  ],
  declarations: [
    ManageComponent,
    ManageTopicComponent,
    ManageQuestionComponent,
    CreateTopicComponent,
    ManageTestComponent,
    AddTestComponent,
    AddQuestionComponent,
  ],
})
export class ManageModule { }
