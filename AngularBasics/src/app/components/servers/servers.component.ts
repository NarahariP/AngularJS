import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowedNewServer: boolean = false;
  serverCreationStatus: string = 'No Server Created!';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['Server1', 'Server2'];
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = !this.allowedNewServer;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreated = !this.serverCreated;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with ' + this.serverName;
  }
}
