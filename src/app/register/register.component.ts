import { ToastrService } from 'ngx-toastr';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"),
        Validators.minLength(2),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9 .'-]+"),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [Validators.required]),
    };

    this.myForm = this.fb.group(formControls);
  }

  get getfirstname() {
    return this.myForm.get('firstname');
  }

  get getlastname() {
    return this.myForm.get('lastname');
  }
  get getphone() {
    return this.myForm.get('phone');
  }

  get getemail() {
    return this.myForm.get('email');
  }

  get getpwd() {
    return this.myForm.get('password');
  }

  get getrptpwd() {
    return this.myForm.get('repeatPassword');
  }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/people-list']);
    }
  }

  register() {
    let data = this.myForm.value;
    let user = new User(
      data.firstname,
      data.lastname,
      data.email,
      data.phone,
      data.password
    );
    this.userService.registerAdmin(user).subscribe(
      (result) => {
        this.toastr.success(result.message);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
