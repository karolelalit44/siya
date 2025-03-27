import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeModule } from './core/pages/home/home.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    LoginComponent,
    HomeModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    NgSelectModule, 
    BrowserModule, 
    NgbModule,
    NgbDatepickerModule,
    CanvasJSAngularChartsModule,

  ],
  providers: [AuthService],
})
export class AppModule { }
