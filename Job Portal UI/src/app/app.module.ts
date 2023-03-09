import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
// toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManagejobsComponent } from './pages/managejobs/managejobs.component';
import { ManageusersComponent } from './pages/manageusers/manageusers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddjobComponent } from './pages/addjob/addjob.component';
import { EditjobComponent } from './pages/editjob/editjob.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { FindjobsComponent } from './pages/findjobs/findjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    ManagejobsComponent,
    ManageusersComponent,
    ProfileComponent,
    AddjobComponent,
    EditjobComponent,
    EdituserComponent,
    FindjobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
