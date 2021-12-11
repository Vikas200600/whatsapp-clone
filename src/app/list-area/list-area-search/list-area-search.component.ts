import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-area-search',
  templateUrl: './list-area-search.component.html',
  styleUrls: ['./list-area-search.component.scss'],
})
export class ListAreaSearchComponent implements OnInit {
  searchKey: string;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
