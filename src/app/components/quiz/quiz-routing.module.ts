import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageCreateComponent } from './package-create/package-create.component';
import { PackageListComponent } from './package-list/package-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { TopicsListComponent } from './topics-list/topics-list.component';

const routes: Routes = [
  {
    path: 'packages',
    component: PackageListComponent,
  },
  {
    path: 'topics',
    component: TopicsListComponent,
  },
  {
    path: 'question/create',
    component: QuestionCreateComponent
  },
  {
    path: 'create',
    component: PackageCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}