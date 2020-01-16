import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(null)
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue() {return this.currentUserSubject.value}

  login(loginData: any) {
    return this
      .http
      .post<any>(`${environment.apiUrl}/auth/`, loginData)
      .pipe(
        map((data: any) => {
          console.log({data})
          localStorage.setItem('cesystm_token', data.token)
          this.currentUserSubject.next(data.user)
        }),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  logout() {
    localStorage.removeItem('hnrs_token')
    this.currentUserSubject.next(null)
  }
}
