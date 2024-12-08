import { Component } from '@angular/core';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent {
  show = { name: '' };

  addShow() {
    console.log('Show added:', this.show);
    // Add API call here if necessary
  }
}
