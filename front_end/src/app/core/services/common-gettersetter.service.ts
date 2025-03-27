import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonGettersetterService {

  private project: any;

  private currentReport: any;

  constructor() { }

  setProject(project: any): void {
    this.project = project;
  }

  getProject(): any {
    return this.project;
  }

  clearCommonGetSet(): void {
    this.project = null;
  }

  setCurrentReport(report: any): void {
    this.currentReport = report;
  }
  
  getCurrentReport(): any {
    return this.currentReport;
  }
  
}