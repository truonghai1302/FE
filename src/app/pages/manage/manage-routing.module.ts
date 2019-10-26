import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTopicComponent } from './manage-topic/manage-topic.component';
import { CreateTopicComponent } from './manage-topic/create-topic/create-topic.component';
import { ManageComponent } from './manage.component';
import { ManageQuestionComponent } from './manage-question/manage-question.component';
import { AddQuestionComponent } from './manage-question/add-question/add-question.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'topic',
        component: ManageTopicComponent,
      },
      {
        path: 'topic/add',
        component: CreateTopicComponent,
      },
      {
        path: 'question',
        component: ManageQuestionComponent,
      },
      {
        path: 'question/add',
        component: AddQuestionComponent,
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
export class ManageRoutingModule {
}

