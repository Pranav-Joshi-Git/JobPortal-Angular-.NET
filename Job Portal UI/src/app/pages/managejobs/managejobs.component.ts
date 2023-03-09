import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-managejobs',
  templateUrl: './managejobs.component.html',
  styleUrls: ['./managejobs.component.css'],
})
export class ManagejobsComponent implements OnInit {
  constructor(
    private router: Router,
    private job: JobService,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  jobs = [];

  gotoEdit(JobId: number) {
    this.router.navigate(['manage-jobs/edit/' + JobId]);
  }

  deleteJob(JobId: number) {
    this.job.deleteJob(JobId).subscribe(() => {
      this.toastr.info('Job deleted successfully');
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.job.getAllJobs().subscribe(
      (jobs: any) => {
        this.jobs = jobs;
        this.ref.detectChanges();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
