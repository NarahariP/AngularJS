import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: ` <p>This is Warning, You are in Danger!</p> `,
  styles: [
    `
      p {
        padding: 4px;
        background-color: red;
        color: white;
      }
    `,
  ],
})
export class AlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
