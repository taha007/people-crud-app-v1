import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
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

  ngOnInit(): void {}

  register() {
    let data = this.myForm.value;
    let user = new User(
      data.lastname,
      data.firstname,
      data.email,
      data.phone,
      data.password
    );
    console.log(user);
  }
}
