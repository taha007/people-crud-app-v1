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
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let formControls = {
      firstnamecnt: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      lastnamecnt: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      phonecnt: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9 .'-]+"),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
    };

    this.myForm = this.fb.group(formControls);
  }

  get getfirstname() {
    return this.myForm.get('firstnamecnt');
  }

  get getlastname() {
    return this.myForm.get('lastnamecnt');
  }
  get getphone() {
    return this.myForm.get('phonecnt');
  }

  ngOnInit(): void {}

  addUser() {
    let data = this.myForm.value;
    let user = new User(
      data.firstnamecnt,
      data.lastnamecnt,
      null,
      data.phonecnt,
      null
    );

    this.userService.addUser(user).subscribe(
      (result) => {
        this.toastr.success(result.message);
        this.router.navigate(['/people-list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
