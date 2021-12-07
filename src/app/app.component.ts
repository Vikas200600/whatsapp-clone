import { Component } from '@angular/core';
import { chatData } from './chatData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chatData = chatData;
  userName = Object.keys(this.chatData)[0];
  defaultUser = this.chatData[this.userName];
}
