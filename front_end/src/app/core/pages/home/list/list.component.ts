import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireApiService } from '../../../services/questionnaire-api.service';



@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  responses: any[] = [];

  constructor(
    private router: Router,
    private questionnaireApiService: QuestionnaireApiService
  ) {}

  ngOnInit() {
    this.loadResponses();
  }

  loadResponses() {
    this.questionnaireApiService.getResponses().subscribe(
      (data: any[]) => {
        this.responses = data;
      },
      (error) => {
        console.error('Error fetching responses:', error);
      }
    );
  }

  addNewResponse() {
    this.router.navigate(['/questionnaire']);
  }
}
