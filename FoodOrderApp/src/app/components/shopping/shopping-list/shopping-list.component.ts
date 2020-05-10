import { Component, OnInit } from '@angular/core';
import { Incredient } from 'src/app/model/incredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  incredients: Incredient[] = [
    new Incredient('Apple', 10),
    new Incredient('Tomoto', 15),
  ];
  constructor() {}

  ngOnInit(): void {}
}
