import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { mockUsers } from '../userSample';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss'],
})
export class ListAreaComponent implements OnInit {
  users: User[] = mockUsers;

  constructor() {}

  ngOnInit(): void {}
}
