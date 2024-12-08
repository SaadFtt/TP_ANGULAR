import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {
  show = { id: 0, name: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.show.id = params['id'];
      // Fetch show data based on ID if necessary
    });
  }

  editShow() {
    console.log('Show edited:', this.show);
    // Add API call here if necessary
  }
}
