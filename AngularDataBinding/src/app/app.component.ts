import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [{ type: 'server', name: 'Test Name', content: 'Test Content' }];

  onServerAdded(serverData: { name: string; content: string }) {
    this.servers.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintAdded(serverData: { name: string; content: string }) {
    this.servers.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content,
    });
  }
}
