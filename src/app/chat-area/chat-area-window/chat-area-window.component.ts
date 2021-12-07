import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-area-window',
  templateUrl: './chat-area-window.component.html',
  styleUrls: ['./chat-area-window.component.scss'],
})
export class ChatAreaWindowComponent implements OnInit {
  @Input('userDetails') chatDetails: object;
  chats: object[];

  constructor() {}

  ngOnInit(): void {}
}
