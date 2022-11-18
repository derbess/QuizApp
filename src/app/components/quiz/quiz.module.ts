import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './package-list/package-list.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { PackageCreateComponent } from './package-create/package-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { PackageDetailedComponent } from './package-detailed/package-detailed.component';



@NgModule({
  declarations: [
    PackageListComponent,
    PackageCreateComponent,
    TopicsListComponent,
    QuestionCreateComponent,
    PackageDetailedComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
