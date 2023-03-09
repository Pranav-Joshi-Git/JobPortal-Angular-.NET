import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css'],
})
export class EditjobComponent implements OnInit {
  jobId: any;

  job: any;

  constructor(
    private routeParams: ActivatedRoute,
    private router: Router,
    private jobS: JobService,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    routeParams.params.subscribe((params) => {
      this.jobId = params['jobId'];
      console.log(this.jobId);
    });
  }

  editJobForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    skill: [null, Validators.required],
    minExperience: [null, Validators.required],
    maxExperience: [null, Validators.required],
  });

  ngOnInit(): void {
    this.jobS.getJobById(this.jobId).subscribe(
      (job: any) => {
        this.job = job;
        this.ref.detectChanges();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editJob() {
    
  }

  get form() {
    return this.editJobForm.controls;
  }
}
