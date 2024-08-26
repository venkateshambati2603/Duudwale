import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    const token = sessionStorage.getItem('token');

    // Set the headers including the Authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<any>(`${BASEURL}/api/users/detail`, { headers });
  }

  updateUserDetails(user: any): Observable<any> {
    return this.http.put<any>(`${BASEURL}`, user);
  }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${BASEURL}/api/users/register`, userData);
  }

  logIn(userData: any): Observable<any> {
    return this.http.post<any>(`${BASEURL}/api/users/login`, userData);
  }
}
