import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  searchItem: string='';
  constructor(private service:ApiService,private cartService: CartapiService,private route: Router) { }
  tags:[]=[]
  ngOnInit(): void {
  

    this.service.getProducts().subscribe(res=>{
      console.log('products::', res);
      
      this.products=res;
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })

    this.service.getProducts().subscribe((a:any)=>{
      this.tags= a.category
       console.log(this.tags)
     })

  }
  addToCart(item:any){
    this.cartService.addToCart(item);
    alert("added succcesfull")
  }



}
