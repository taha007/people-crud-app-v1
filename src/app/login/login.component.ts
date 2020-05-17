import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {}

  login() {
    let data = this.myForm.value;
    let user = new User(null, null, data.emailcnt, null, data.passwordcnt);
    console.log(user);
  }
}
