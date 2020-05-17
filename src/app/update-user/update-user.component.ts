import { Component, OnInit, Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    this.userService.getUser(idUser).subscribe(
      (res) => {
        let data = res;
        console.log(res);

        this.myForm.patchValue({
          firstnamecnt: data.firstname,
          lastnamecnt: data.lastname,
          phonecnt: data.phone,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateUser() {
    let data = this.myForm.value;
    let user = new User(
      data.firstnamecnt,
      data.lastnamecnt,
      null,
      data.phonecnt,
      null,
      this.route.snapshot.params.id
    );
    this.userService.updateUser(user).subscribe(
      (res) => {
        console.log(res);
        this.toastr.warning(res.message);
        this.router.navigate(['/people-list']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
