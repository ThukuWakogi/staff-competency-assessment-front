import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentPeriodService {

  constructor(private http: HttpClient) { }

  getAssessmentPeriodSummary() {return this.http.get<any>(`${environment.apiUrl}/assessment-periods/summary/`)}

  getAssessementPeriods() {return this.http.get<any[]>(`${environment.apiUrl}/assessment-periods/`)}
}
