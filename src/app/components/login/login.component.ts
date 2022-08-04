import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  constructor(private formbuilder: FormBuilder,private auth:AuthService,private route:Router, private http:HttpClient) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.route.navigate(['products'])
    }
    this.form = this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onLogin(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email=== this.form.value.email && a.password === this.form.value.password
      });
      if(user&&this.form.valid){
        alert("Login succes");
            this.auth.login(this.form.value).subscribe((res)=>{
              this.route.navigate(['products'])
              this.form.reset();
            })
    }else{
      alert("user not found")
    }})

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
