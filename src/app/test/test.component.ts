import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControls = {
      firstnamecnt: new FormControl('taha', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      phonecnt: new FormControl('', [
        //Validators.pattern("[0-9 .'-]+"),
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
    };

    this.myForm = this.fb.group(formControls);
  }

  get getfirstname() {
    return this.myForm.get('firstnamecnt');
  }
  get getphone() {
    return this.myForm.get('phonecnt');
  }

  ngOnInit(): void {}

  saveUser() {
    console.log(this.myForm.value);
  }
}
