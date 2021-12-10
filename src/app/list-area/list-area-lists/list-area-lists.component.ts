import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list-area-lists',
  templateUrl: './list-area-lists.component.html',
  styleUrls: ['./list-area-lists.component.scss'],
})
export class ListAreaListsComponent implements OnInit, OnChanges {
  @Input('user') user: string;
  @Input('userDetails') userDetails: object;
  @Input('activeUser') activeUser: string;

  lastChat: object;

  constructor() {}

  ngOnInit(): void {
    this.getLastMessage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getLastMessage();
  }

  getLastMessage() {
    let chatLength = this.userDetails['chats'].length;
    this.lastChat = this.userDetails['chats'][chatLength - 1];
  }
}
