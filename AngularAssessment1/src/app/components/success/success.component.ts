import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [
    `
      p {
        padding: 4px;
        background-color: green;
        color: white;
      }
    `,
  ],
})
export class SuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
