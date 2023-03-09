import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const url = 'https://localhost:7188/api';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  createJob(body: any) {
    return this.http.post(`https://localhost:7188/api/jobs`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  updateJob(body: any, JobId: number) {
    return this.http.put(`https://localhost:7188/api/jobs/${JobId}`, body, {
      observe: 'body',
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
       
    });
  }

  deleteJob(JobId: number) {
    return this.http.delete(`https://localhost:7188/api/jobs/${JobId}`, {
      observe: 'body',
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
       
    });
  }

  getJobById(jobId: any) {
    return this.http.get(`${url}/jobs/${jobId}`, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  


  getAllJobs() {
    return this.http.get(`https://localhost:7188/api/jobs`);
  }
}
