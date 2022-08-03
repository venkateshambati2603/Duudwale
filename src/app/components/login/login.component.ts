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
  constructor(private formbuilder: FormBuilder,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.route.navigate(['products'])
    }
    this.form = this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){
    if(this.form.valid){
      this.auth.login(this.form.value).subscribe((res)=>{
        this.route.navigate(['products'])
      }),
      (err:Error)=>{
        alert(err.message)
      }
      console.log(this.form.value)
    }
    if(this.form.invalid){
      alert("Please Enter your Details")
    }
  }
}
