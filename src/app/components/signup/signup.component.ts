import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userDetails!: FormGroup;
  StrongPasswordRegx: RegExp =/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  isLoading = false;
  
  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userDetails = this.formbuilder.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role : ['user'],
      address: this.formbuilder.group({
        Street: [''],
        City: [''],
        State: [''],
        Country: [''],
        PostalCode: ['']
      })
    });
  }

  signIn() {
    console.log('this.userDetails.value:: ', this.userDetails.value);
    this.isLoading = true;
    this.userService.signUp(this.userDetails.value).subscribe(
      (res) => {
        // alert('SignUp Successful');
        this.isLoading = false;
        this.userDetails.reset();
        this.route.navigate(['/login']);
      },
      (err) => {
        this.isLoading = false;
        alert('Error occurred: ' + err.error.message);
      }
    );
  }
}
