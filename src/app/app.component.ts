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
    console.log('constructor called');
    this.dataService.subject.subscribe((data) => {
      this.chatData = data;
    });
    this.userName = this.chatData['keys'][0];
    console.log('constructor userName', this.userName);
    console.log('constructor userChat', this.chatData[this.userName]);
  }

  ngOnInit(): void {
    console.log('ngOnInit userName', this.userName);
    console.log('ngOnInit called');
  }

  updateChatWindow(key: string) {
    this.userName = key;
  }
}
