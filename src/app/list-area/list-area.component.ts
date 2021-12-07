import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss'],
})
export class ListAreaComponent implements OnInit {
  @Input('data') data: object;
  @Input('activeUser') activeUser: string;

  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getChats(key: string) {
    this.clickHandler.emit(key);
    console.log('list-area', key);
  }
}
