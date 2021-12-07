import { Component, OnInit } from '@angular/core';
import { mockChats } from 'src/app/chatSample';

@Component({
  selector: 'app-chat-area-window',
  templateUrl: './chat-area-window.component.html',
  styleUrls: ['./chat-area-window.component.scss'],
})
export class ChatAreaWindowComponent implements OnInit {
  chats = mockChats;

  constructor() {}

  ngOnInit(): void {}
}
