import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private ref: ChangeDetectorRef
  ) {}

  isLoggedIn() {
    return this.auth.isLoggedin;
  }
  isAdmin() {
    return this.auth.isAdmin;
  }

  handleSignOut() {
    this.auth.logout();
    this.toastr.success('Logout successfully');
    this.router.navigate(['/signin']);
    
  }
  ngOnInit(): void {}
}
