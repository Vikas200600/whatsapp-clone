import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chatData } from '../chatData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  subject = new BehaviorSubject({});

  constructor() {
    this.subject.next(chatData);
  }
}
