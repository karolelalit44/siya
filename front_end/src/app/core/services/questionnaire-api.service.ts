import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireApiService {
  private apiUrl = 'http://127.0.0.1:8000/responses/';

  constructor(private http: HttpClient) {}

  submitResponse(response: any): Observable<any> {
    return this.http.post(this.apiUrl, response);
  }

  getResponses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
