import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication/authentication.service';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {
  private PendingAssessmentStatusSubject: BehaviorSubject<any>
  public PendingAssessmentStatus: Observable<any>

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.PendingAssessmentStatusSubject = new BehaviorSubject<any>(null)
    this.PendingAssessmentStatus = this.PendingAssessmentStatusSubject.asObservable()
    this
      .authenticationService
      .currentUser
      .subscribe(data => {
        console.log({data})
        if (data) this.isAssessmentPending(data.id)
      })
  }

  public getPendingAssessmentStatusValue() {return this.PendingAssessmentStatusSubject.value}

  public isAssessmentPending(userId: number) {
    console.log({userId})
    this
      .http
      .get<any>(`${environment.apiUrl}/assessments/pending/${userId}/`)
      .pipe(first())
      .subscribe(data => {
        console.log({data})
        this.PendingAssessmentStatusSubject.next(data)
      })
  }
}
