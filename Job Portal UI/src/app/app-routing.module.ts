import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './pages/addjob/addjob.component';
import { EditjobComponent } from './pages/editjob/editjob.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagejobsComponent } from './pages/managejobs/managejobs.component';
import { ManageusersComponent } from './pages/manageusers/manageusers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FindjobsComponent } from './pages/findjobs/findjobs.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'manage-users', component: ManageusersComponent },
  {
    path: 'manage-users/edit/:userId',
    component: EdituserComponent,
  },
  {
    path : 'find-jobs', component:FindjobsComponent
  },
  {
    path: 'manage-jobs',
    component: ManagejobsComponent,
  },
  {
    path: 'manage-jobs/edit/:jobId',
    component: EditjobComponent,
  },
  { path: 'add-job', component: AddjobComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
