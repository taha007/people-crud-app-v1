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
  myCondition = false;

  constructor() {}

  ngOnInit(): void {}

  hello(myname: string) {
    alert('this is myname :' + myname);
  }
}
