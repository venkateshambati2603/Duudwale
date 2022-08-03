import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { CartapiService } from '../services/cartapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router,private cartserve: CartapiService) { }

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
    this.cartserve.removeAllCart()
  }

  login({email,password}:any){
    // this.cartserve.addToCart(this.isLoggedIn())  
    if(email&& password){
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({});
    }
    return throwError(new Error('dailed to login'));
  }

  signIn({email,password}:any){
    if(email&& password){
      return alert('Registration Succesfull')
    }
    return throwError(new Error('dailed to signin'))

  }
}
