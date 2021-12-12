import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chatData } from '../chatData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  masterChatData: object = chatData;
  chatData: object = {
    ...this.masterChatData,
  };
  subject = new BehaviorSubject(this.chatData);

  constructor() {}

  getNewMessage(groupName: string, newMessage: object) {
    chatData[groupName]['chats'].push(newMessage);
    this.chatData = { ...this.chatData };
    this.sendToSubcribers(this.chatData);
  }

  getSearch(searchKey: string) {
    console.log('serachFun - key', searchKey);
    const filterKeys: string[] = this.masterChatData['keys'].filter((key) =>
      key.toLowerCase().includes(searchKey.toLowerCase())
    );
    this.chatData = {
      ...this.chatData,
      keys: [...filterKeys],
    };
    this.sendToSubcribers(this.chatData);
  }

  sendToSubcribers(updatedChatdata: object) {
    this.subject.next(JSON.parse(JSON.stringify(updatedChatdata)));
  }
}
