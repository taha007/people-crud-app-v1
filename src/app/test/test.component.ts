import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  name = 'taha';
  url = '/assets/images/myimages.jpeg';

  booksList = [];
  usersList = [];
  myCondition = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.usersList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hello(myname: string) {
    alert('this is myname :' + myname);
  }
}
