import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  chatData: object;
  userName: string;
  user: object;

  constructor(private dataService: DataService) {
    this.dataService.subject.subscribe((data) => {
      this.chatData = data;
    });
  }

  ngOnInit(): void {
    this.updateChatWindow(Object.keys(this.chatData)[0]);
  }

  updateChatWindow(key: string) {
    this.userName = key;
    this.user = this.chatData[key];
  }
}
