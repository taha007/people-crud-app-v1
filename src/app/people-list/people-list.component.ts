import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  elements: any = [
    { id: 1, firstname: 'Mark', lastname: 'Otto', phone: '@mdo' },
    { id: 2, firstname: 'Jacob', lastname: 'Thornton', phone: '@fat' },
    { id: 3, firstname: 'Larry', lastname: 'the Bird', phone: '@twitter' },
  ];

  headElements = ['#', 'Firstname', 'Lastname', 'Phone', '#'];
  constructor() {}

  ngOnInit(): void {}

  deleteRow(id) {
    for (let i = 0; i < this.elements.length; ++i) {
      if (this.elements[i].id === id) {
        this.elements.splice(i, 1);
      }
    }
  }
}
