import { Component } from '@angular/core';
import { chatData } from './chatData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'whatsapp';
  chatData = chatData;
}
