import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    const token = localStorage.getItem('token');

    // Set the headers including the Authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<any>(`${this.apiUrl}/detail`, { headers });
  }

  updateUserDetails(user: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, user);
  }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  logIn(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userData);
  }
}
