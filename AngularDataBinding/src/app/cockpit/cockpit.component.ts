import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('serverCreatedWithAlias') serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('blueprintCreatedWithAlias') blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  addNewServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  addBluePrint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
