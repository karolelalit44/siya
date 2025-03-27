// src/app/services/questionnaire.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private apiUrl = 'http://localhost:8000';  // Assuming FastAPI is running on localhost:8000

  constructor(private http: HttpClient) {}

  getSteps(): StepType[] {
    return [
      {
        label: 'Initial Questions',
        fields: [
          {
            key: 'player_type',
            type: 'select',
            templateOptions: {
              label: 'Are you a player or a coach?',
              options: [
                { label: 'Player', value: 'player' },
                { label: 'Coach', value: 'coach' },
              ],
              required: true,
            },
          },
        ],
      },
      {
        label: 'Sport Selection',
        fields: [
          {
            key: 'sport_type',
            type: 'select',
            templateOptions: {
              label: 'Which sport are you interested in?',
              options: [
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' },
                { label: 'Tennis', value: 'tennis' },
                { label: 'Cricket', value: 'cricket' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ],
              required: true,
            },
          },
        ],
      },
    ];
  }

  getNextSteps(responses: any): StepType[] {
    if (responses.player_type === 'player') {
      return this.getPlayerSteps(responses.sport_type);
    } else if (responses.player_type === 'coach') {
      return this.getCoachSteps(responses.sport_type);
    }
    return [];
  }

  private getPlayerSteps(sportType: string): StepType[] {
    return [
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Player Experience`,
        fields: [
          {
            key: 'experience',
            type: 'input',
            templateOptions: {
              label: 'How many years of experience do you have?',
              required: true,
              type: 'number',
            },
          },
          {
            key: 'position',
            type: 'input',
            templateOptions: {
              label: `What position do you play in ${sportType}?`,
              required: true,
            },
          },
        ],
      },
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Player Training`,
        fields: [
          {
            key: 'training_hours',
            type: 'input',
            templateOptions: {
              label: 'How many hours do you train per week?',
              required: true,
              type: 'number',
            },
          },
        ],
      },
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Player Preferences`,
        fields: [
          {
            key: 'favorite_team',
            type: 'input',
            templateOptions: {
              label: 'What is your favorite team?',
              required: true,
            },
          },
          {
            key: 'watching_frequency',
            type: 'select',
            templateOptions: {
              label: 'How often do you watch this sport?',
              options: [
                { label: 'Daily', value: 'daily' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
                { label: 'Rarely', value: 'rarely' },
              ],
              required: true,
            },
          },
        ],
      },
    ];
  }

  private getCoachSteps(sportType: string): StepType[] {
    return [
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Coach Experience`,
        fields: [
          {
            key: 'experience',
            type: 'input',
            templateOptions: {
              label: 'How many years of coaching experience do you have?',
              required: true,
              type: 'number',
            },
          },
          {
            key: 'team_level',
            type: 'select',
            templateOptions: {
              label: 'What level team do you coach?',
              options: [
                { label: 'Youth', value: 'youth' },
                { label: 'High School', value: 'highSchool' },
                { label: 'College', value: 'college' },
                { label: 'Professional', value: 'professional' },
              ],
              required: true,
            },
          },
        ],
      },
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Coach Philosophy`,
        fields: [
          {
            key: 'coaching_philosophy',
            type: 'textarea',
            templateOptions: {
              label: 'Briefly describe your coaching philosophy:',
              required: true,
            },
          },
        ],
      },
      {
        label: `${sportType.charAt(0).toUpperCase() + sportType.slice(1)} Coach Preferences`,
        fields: [
          {
            key: 'favorite_team',
            type: 'input',
            templateOptions: {
              label: 'What is your favorite team?',
              required: true,
            },
          },
          {
            key: 'watching_frequency',
            type: 'select',
            templateOptions: {
              label: 'How often do you watch this sport?',
              options: [
                { label: 'Daily', value: 'daily' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
                { label: 'Rarely', value: 'rarely' },
              ],
              required: true,
            },
          },
        ],
      },
    ];
  }

  submitResponse(response: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/responses/`, response);
  }

  getResponses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/responses/`);
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
