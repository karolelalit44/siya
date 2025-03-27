import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasJSAngularChartsModule, CanvasJSChart } from '@canvasjs/angular-charts';
import { MultiSelectModule } from 'primeng/multiselect';
import { Chip } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TrashIcon } from 'primeng/icons/trash';
import { SearchFilterPipe } from '../../pipe/search.pipe';
import { SelectModule } from 'primeng/select';
import { QuestionStepComponent } from './question-step/question-step.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    QuestionStepComponent,
    QuestionnaireComponent,
    ProgressBarComponent,
    ListComponent
  ],
  imports: [

    DialogModule,
    ButtonModule,
    TrashIcon,
    Chip,
    SelectModule,
    SearchFilterPipe,
    MultiSelectModule ,
    CommonModule,
    HomeRoutingModule,
    NgSelectModule, 
    FormsModule,
    NgbModule,
    CanvasJSAngularChartsModule,
    
]
})
export class HomeModule { }
