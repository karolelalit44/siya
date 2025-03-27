import { Component } from '@angular/core';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { Router } from '@angular/router';
import { QuestionnaireApiService } from '../../../services/questionnaire-api.service';

@Component({
  selector: 'app-questionnaire',
  standalone: false,
  // imports: [],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})

export class QuestionnaireComponent {
  steps: StepType[] = [];
  currentStepIndex = 0;
  responses: { [key: string]: any } = {};
  formSubmitted = false;
  disableNavigation = false;
  countdown = 5; // Initialize countdown to 5 seconds
  showSummary = false;

  constructor(
    private questionnaireService: QuestionnaireService,
    private router: Router
  ) {
    this.steps = this.questionnaireService.getSteps();
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1 && !this.disableNavigation) {
      this.currentStepIndex++;
    }
    this.updateSteps();
  }

  prevStep() {
    if (this.currentStepIndex > 0 && !this.disableNavigation) {
      this.currentStepIndex--;
    }
  }

  setResponse(key: string, value: any) {
    this.responses[key] = value;
    this.updateSteps();
  }

  submitQuestionnaire() {
    console.log('Questionnaire submitted:', this.responses);
    
    this.questionnaireService.submitResponse(this.responses).subscribe(
      (response) => {
        console.log('API response:', response);
        this.formSubmitted = true;
        this.disableNavigation = true;
        this.startCountdown();
      },
      (error) => {
        console.error('Error submitting questionnaire:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  private updateSteps() {
    const nextSteps = this.questionnaireService.getNextSteps(this.responses);
    if (nextSteps.length > 0) {
      this.steps = [...this.steps, ...nextSteps];
    }
  }

  isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  private startCountdown() {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(timer);
        this.router.navigate(['/list']);
      }
    }, 1000);
  }

  cancelSubmission() {
    this.showSummary = false;
  }
}

interface StepType {
  label: string;
  fields: FieldType[];
}

interface FieldType {
  key: string;
  type: string;
  templateOptions: {
    label: string;
    required: boolean;
    type?: string;
    options?: { label: string; value: string }[];
  };
}
