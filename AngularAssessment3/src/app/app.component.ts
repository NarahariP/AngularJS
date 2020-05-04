import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displyDetails: boolean = false;
  logs = [];

  onToggleDetails() {
    this.displyDetails = !this.displyDetails;
    this.logs.push(this.logs.length + 1);
  }
}
