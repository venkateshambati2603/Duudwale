import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  setToken(token:string): void{
    localStorage.setItem('token', token)
  }

  
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken()!== null
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email,password}:any){
    if(email&& password){
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name:'Venky',email:'admin@gmail.com'});

    }
    return throwError(new Error('dailed to login'));
  }
}
