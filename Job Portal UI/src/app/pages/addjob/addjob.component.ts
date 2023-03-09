import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css'],
})
export class AddjobComponent implements OnInit {
  constructor(
    private router: Router,
    private job: JobService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  addJobForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    skill: [null, Validators.required],
    minExperience: [null, Validators.required],
    maxExperience: [null, Validators.required],
  });

  addJob() {
    let payload = JSON.stringify(this.addJobForm.value);
    this.job.createJob(payload).subscribe((response : any) =>{
      console.log(response);
      this.toastr.success('Job Created Successfully');
      this.router.navigate(['/']);
    });
  }

  get form() {
    return this.addJobForm.controls;
  }

  ngOnInit(): void {}
}
