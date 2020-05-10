import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newServerName = '';
  newServerContent = '';

  servers = [];

  addNewServer() {
    this.servers.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  addBluePrint() {
    this.servers.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
