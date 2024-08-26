import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASEURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get(`${BASEURL}/api/products`).pipe(map((res:any)=>{
      return res;
    }))
  }
}
