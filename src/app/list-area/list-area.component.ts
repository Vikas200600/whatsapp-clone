import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss'],
})
export class ListAreaComponent implements OnInit {
  @Input('data') data: object;

  constructor() {}

  ngOnInit(): void {}
}
