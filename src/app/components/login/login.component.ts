import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

 

export class LoginComponent implements OnInit {
  userLogin!:FormGroup
  isLoading = false;
  constructor(private formbuilder: FormBuilder,private auth:AuthService, private userService: UserService, private route:Router, private http:HttpClient) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.route.navigate(['products'])
    }
    this.userLogin = this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  

  onLogin(){
    console.log('form:: ', this.userLogin.value);
    this.isLoading = true;
    this.userService.logIn(this.userLogin.value).subscribe(
      res => {
        console.log('token:: ', res.token);
        this.isLoading = false;
        sessionStorage.setItem('token', res.token);
        this.route.navigate(['products']);
        this.userLogin.reset();
      },
      err => {
        this.isLoading = false;
        alert('Error occurred: ' + err.error.message);
      }
    );

    // if(this.form.valid){
    //   this.auth.login(this.form.value).subscribe((res)=>{
    //     this.route.navigate(['products'])
    //   }),
    //   (err:Error)=>{
    //     alert(err.message)
    //   }
    //   console.log(this.form.value)
    // }
    // if(this.form.invalid){
    //   alert("Please Enter your Details")
    // }
  }
}
