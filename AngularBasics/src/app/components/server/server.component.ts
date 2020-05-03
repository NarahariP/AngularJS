import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]', THIS CAN BE USED AS ATTRIBUTE IN HTML AS LIKE -> <div app-server></div>
  // selector: '.app-server', THIS CAN BE USED AS CLASS IN HTML AS LIKE -> <div class="app-server"></div>
  selector: 'app-server', // THIS CNA BE USES AS TAG IN HTML AS LIKE -> <app-server></app-server>
  templateUrl: './server.component.html', //template OR templateUrl IS MANDITORY, OTHERWISE ITS COMPILATION ISSUE
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  allowedNewServer = false;
  serverName: string = '';
  serverCreationStatus: string = 'No server was created!';
  serverCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = !this.allowedNewServer;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = !this.serverCreated;
    this.serverCreationStatus =
      'Server was created with name ' + this.serverName;
  }
}
