import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    let formControls = {
      emailcnt: new FormControl('', [Validators.required, Validators.email]),
      passwordcnt: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };

    this.myForm = this.fb.group(formControls);
  }

  get getemail() {
    return this.myForm.get('emailcnt');
  }

  get getpwd() {
    return this.myForm.get('passwordcnt');
  }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/people-list']);
    }
  }

  login() {
    let data = this.myForm.value;
    let user = new User(null, null, data.emailcnt, null, data.passwordcnt);
    this.userService.loginAdmin(user).subscribe(
      (result) => {
        console.log(result);
        let token = result.token;
        localStorage.setItem('myToken', token);
        this.toastr.success(result.message);
        this.router.navigate(['/people-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
