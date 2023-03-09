import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css'],
})
export class ManageusersComponent implements OnInit, OnChanges {
  users = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  gotoEdit(UserId: number) {
    this.router.navigate(['manage-users/edit/' + UserId]);
  }
  ngOnInit(): void {
    this.auth.getAllUser().subscribe(
      (users: any) => {
        this.users = users;
        this.ref.detectChanges();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(UserId: number) {
    this.auth.deleteUser(UserId).subscribe(() => {
      this.toastr.info('User deleted successfully');
      this.router.navigate(['/']);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
