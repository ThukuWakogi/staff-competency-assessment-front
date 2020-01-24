import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {
  constructor(private http: HttpClient) { }

  getManagersAndStaff() {return this.http.get(`${environment.apiUrl}/managers/users`)}
}
