import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form!:FormGroup
  constructor(private formbuilder: FormBuilder,private auth:AuthService,private route:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  signIn(){
   this.http.post<any>("http://localhost:3000/signup", this.form.value).subscribe(res=>{
    alert('signUp Succesfull')
    this.form.reset();
    this.route.navigate(['/login'])
   },err=>{
    alert("Error occured")
  })

    }
  }

