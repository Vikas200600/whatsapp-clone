import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { mockUsers } from '../../userSample';

@Component({
  selector: 'app-list-area-lists',
  templateUrl: './list-area-lists.component.html',
  styleUrls: ['./list-area-lists.component.scss'],
})
export class ListAreaListsComponent implements OnInit {
  @Input('user') user: object = {};

  constructor() {}

  ngOnInit(): void {}
}
