import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'auth',
        loadChildren: async () => {
          const authModule = await import(
            './components/auth/auth.module'
          ).then((m) => m.AuthModule);
          return authModule;
        },
      },
      {
        path: 'quiz',
        loadChildren: async () => {
          const quizModule = await import(
            './components/quiz/quiz.module'
          ).then((m) => m.QuizModule);
          return quizModule;
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
