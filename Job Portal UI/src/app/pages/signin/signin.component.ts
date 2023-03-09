import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required, Validators.email],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  moveToRegister() {
    this.router.navigate(['signup']);
  }
  ls : boolean = false;
  isUserValid : boolean =false;
  login() {
    this.auth.login([this.loginForm.value.email,this.loginForm.value.password])
    .subscribe(res=>{
      if(res=='Failure'){
        this.isUserValid=false;
        console.log("Unsuccessful");
        this.toastr.error('Login Unsuccessful'); 
        this.ls = false;
        // this.auth.isLoggedin(this.ls);       
      }
      else{
        this.isUserValid=true;
        console.log(res);
        this.toastr.success('Login Successful');
        this.ls = true;
        // this.auth.isLoggedin(this.ls);
        this.router.navigate(['/']);
      }
    }

    );
    
  }



  get Email(): FormControl{
    return this.loginForm.get('Email') as FormControl;
  }

  get Password(): FormControl{
    return this.loginForm.get('Password') as FormControl;
  }

  get form() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {}
}
