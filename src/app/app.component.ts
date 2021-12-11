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

  constructor(private dataService: DataService) {
    this.dataService.subject.subscribe((data) => {
      this.chatData = data;
    });
    this.userName = this.chatData['keys'][0];
  }

  ngOnInit(): void {}

  updateChatWindow(key: string) {
    this.userName = key;
  }
}
