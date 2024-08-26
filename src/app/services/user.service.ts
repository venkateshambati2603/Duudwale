import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseAPIUrl = 'https://dudhwale-api.onrender.com';

  getUserDetails(): Observable<any> {
    const token = sessionStorage.getItem('token');

    // Set the headers including the Authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<any>(`${this.baseAPIUrl}/api/users/detail`, { headers });
  }

  updateUserDetails(user: any): Observable<any> {
    return this.http.put<any>(`${this.baseAPIUrl}`, user);
  }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseAPIUrl}/api/users/register`, userData);
  }

  logIn(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseAPIUrl}/api/users/login`, userData);
  }
}
