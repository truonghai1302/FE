import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTopicComponent } from './manage-topic/manage-topic.component';
import { CreateTopicComponent } from './manage-topic/create-topic/create-topic.component';
import { ManageComponent } from './manage.component';

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

