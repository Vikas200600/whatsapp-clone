import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-area-lists',
  templateUrl: './list-area-lists.component.html',
  styleUrls: ['./list-area-lists.component.scss'],
})
export class ListAreaListsComponent implements OnInit {
  @Input('user') user: string;
  @Input('userDetails') userDetails: object;
  @Input('activeUser') activeUser: string;

  lastChat: object;

  constructor() {}

  ngOnInit(): void {
    let chatLength = this.userDetails['chats'].length;
    this.lastChat = this.userDetails['chats'][chatLength - 1];
    console.log('lists', this.userDetails);
  }
}
