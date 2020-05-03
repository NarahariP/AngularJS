import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]', THIS CAN BE USED AS ATTRIBUTE IN HTML AS LIKE -> <div app-server></div>
  // selector: '.app-server', THIS CAN BE USED AS CLASS IN HTML AS LIKE -> <div class="app-server"></div>
  selector: 'app-server', // THIS CNA BE USES AS TAG IN HTML AS LIKE -> <app-server></app-server>
  templateUrl: './server.component.html', //template OR templateUrl IS MANDITORY, OTHERWISE ITS COMPILATION ISSUE
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  ngOnInit(): void {}

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
