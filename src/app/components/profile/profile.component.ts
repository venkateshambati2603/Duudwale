import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  orders = [
    { product: 'Milk', price: 1.50, quantity: 2, frequency: 'Daily' },
    { product: 'Bread', price: 2.00, quantity: 1, frequency: 'Weekly' },
    { product: 'Butter', price: 3.00, quantity: 1, frequency: 'Monthly' }
  ];
  frequencies = ['Daily', 'Weekly', 'Monthly']; // Define your frequency options
  isEditingUser = false;
  displayedColumns: string[] = ['srno', 'product', 'price', 'quantity', 'frequency'];
  user = {
    name: '',
    email: '',
    mobileNumber: '',
    address: {
      Street: '',
      City: '',
      Country : '',
      PostalCode: ''
    }
  };

  isEditing = false;
  originalUser: any;
  userDetails!:FormGroup
  constructor(private formbuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserDetails();
  }

  updateOrder(order: any){
    console.log('order:: ',order);
    
  }

  loadUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      data => {
        console.log('data:;' ,data);
        
        this.user = data;
        this.originalUser = data; 
      },
      error => {
        console.error('Error loading user details', error);
      }
    );
  }


  enableEditing(): void {
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.user = this.originalUser; // Revert to original data
    console.log('data:;' ,this.user);
    this.isEditing = false;
  }

  onSubmit(): void {
    // Implement your update logic here
    this.userService.updateUserDetails(this.user).subscribe(
      () => {
        this.originalUser = { ...this.user }; // Update the original data after successful update
        this.isEditing = false;
      },
      error => {
        console.error('Error updating user details', error);
      }
    );
  }

}
