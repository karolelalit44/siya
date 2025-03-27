import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, title: 'Home - siya'
  },
  {
    path: 'home', component: ListComponent, title: 'Home - siya'
  },

  { path: 'list', component: ListComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
