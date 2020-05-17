import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  url = '/assets/images/formalab.png';
  isLoggedIn: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
  logout() {
    localStorage.removeItem('myToken');
    this.toastr.success('Logout successfully');
    this.router.navigate(['/login']);
  }
}
