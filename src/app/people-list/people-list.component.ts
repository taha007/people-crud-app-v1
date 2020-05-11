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

  deleteRow(id) {
    for (let i = 0; i < this.usersList.length; ++i) {
      if (this.usersList[i].id === id) {
        this.usersList.splice(i, 1);
      }
    }
  }
}
