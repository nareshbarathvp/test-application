import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'question', component: QuestionsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
