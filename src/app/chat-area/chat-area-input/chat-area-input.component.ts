import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chat-area-input',
  templateUrl: './chat-area-input.component.html',
  styleUrls: ['./chat-area-input.component.scss'],
})
export class ChatAreaInputComponent implements OnInit {
  @Input() groupName: string;
  message: string;
  profileName: string = 'you';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  sendMessage() {
    const newMessage = {
      message: this.message,
      name: this.profileName,
      time: this.getFormatedTime(new Date()),
      color: '#eb344f',
    };
    this.dataService.getNewMessage(this.groupName, newMessage);
    this.message = '';
  }

  getFormatedTime(date: Date) {
    let formatedTime = date.toLocaleTimeString();
    let meridiem = formatedTime.split(' ')[1];
    let timeSplits = formatedTime.split(':');
    return `${timeSplits[0]}:${timeSplits[1]}${meridiem}`;
  }
}
