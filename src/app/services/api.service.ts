import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseAPIUrl = 'https://dudhwale-api.onrender.com';

  getProducts(){
    return this.http.get(`${this.baseAPIUrl}/api/products`).pipe(map((res:any)=>{
      return res;
    }))
  }
}
