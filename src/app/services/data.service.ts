import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chatData } from '../chatData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  chatData: object = chatData;
  subject = new BehaviorSubject(this.chatData);

  constructor() {}

  getNewMessage(groupName: string, newMessage: object) {
    chatData[groupName].chats.push(newMessage);
    this.subject.next(JSON.parse(JSON.stringify(chatData)));
  }
}
