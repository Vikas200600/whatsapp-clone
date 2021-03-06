import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss'],
})
export class ChatAreaComponent implements OnInit {
  @Input('userName') groupName: string;
  @Input('user') userDetails: object;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('chat-area', this.userDetails);
  }
}
