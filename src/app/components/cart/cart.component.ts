import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[]
  allProducts:any=0;
  constructor(private cartService:CartapiService) { }

  ngOnInit(): void {
    localStorage.getItem('Products')
    this.cartService.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartService.getTotalAmout();
    })
  }

  removeProduct(item:any){
    this.cartService.removeCartData(item);
  }

  removeAllProduct(){
    this.cartService.removeAllCart();
  }
}
