import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  usersList: any = [];

  headUsersList = ['#', 'Firstname', 'Lastname', 'Phone', '#'];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (results) => {
        this.usersList = results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteRow(user) {
    let index = this.usersList.indexOf(user);
    this.usersList.splice(index, 1);

    this.userService.deleteUser(user._id).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
