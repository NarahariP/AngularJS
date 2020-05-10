import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chickpea',
      'I love chickpea recipes so much that I almost named this blog “Chickpea Chick.”',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/04/chickpea-recipes.jpg'
    ),
    new Recipe(
      'Chickpea',
      'I love chickpea recipes so much that I almost named this blog “Chickpea Chick.”',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/04/chickpea-recipes.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
