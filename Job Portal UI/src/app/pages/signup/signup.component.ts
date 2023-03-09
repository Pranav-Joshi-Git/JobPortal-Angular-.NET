import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  registerForm: FormGroup = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  moveToLogin() {
    this.router.navigate(['signin']);
  }
  register() {
    let payload = JSON.stringify(this.registerForm.value);
    this.auth.register(payload).subscribe((response : any) =>{
      // console.log(response);
      this.toastr.success('Registeration Successful.');
      this.router.navigate(['/']);
    });
   
  }

  get form() {
    return this.registerForm.controls;
  }
  ngOnInit(): void {}
}
