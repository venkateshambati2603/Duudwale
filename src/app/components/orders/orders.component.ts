import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders = [
    { product: 'Milk', price: 1.50, quantity: 2, frequency: 'Daily' },
    { product: 'Bread', price: 2.00, quantity: 1, frequency: 'Weekly' },
    { product: 'Butter', price: 3.00, quantity: 1, frequency: 'Monthly' }
  ];
  frequencies = ['Daily', 'Weekly', 'Monthly']; 
  displayedColumns: string[] = ['srno', 'product', 'price', 'quantity', 'frequency'];

  updateOrder(order: any){

  }

}
