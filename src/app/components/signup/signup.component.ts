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
  constructor(private formbuilder: FormBuilder,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){
    if(this.form.valid){
      // this.auth.signIn(this.form.value)
        this.route.navigate(['/login'])
    }
      (err:Error)=>{
        alert(err.message)
      }
      console.log(this.form.value)

    }
  }

