import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows = [
    { id: 1, name: 'Show 1' },
    { id: 2, name: 'Show 2' }
  ];

  ngOnInit() {}
}
