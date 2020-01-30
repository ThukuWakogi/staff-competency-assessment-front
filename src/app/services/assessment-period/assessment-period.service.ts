import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentPeriodService {
  assessmentPeriodsSubject: BehaviorSubject<any[]>
  assessmentPeriods: Observable<any[]>

  constructor(private http: HttpClient) {
    this.assessmentPeriodsSubject = new BehaviorSubject<any[]>([])
    this.assessmentPeriods = this.assessmentPeriodsSubject.asObservable()
  }

  getAssessmentPeriodSummary() {return this.http.get<any>(`${environment.apiUrl}/assessment-periods/summary/`)}

  getAssessementPeriods() {
    this
      .http
      .get<any[]>(`${environment.apiUrl}/assessment-periods/`)
      .subscribe((assessmentPeriods: any) => {
        this.assessmentPeriodsSubject.next(assessmentPeriods)
      })
  }

  updateAssessmentPeriod(assessmentPeriodId: number, updatedDetails: any) {
    return this.http.patch(`${environment.apiUrl}/assessment-periods/${assessmentPeriodId}/`, updatedDetails)
  }

  insertAssessmentPeriod(assessmentPeriod: any) {
    return this.http.post(`${environment.apiUrl}/assessment-periods/`, assessmentPeriod)
  }
}
