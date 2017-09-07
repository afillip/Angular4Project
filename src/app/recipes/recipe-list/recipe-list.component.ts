import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('A test Recipe', 'This is simply a test.',
      'https://i.pinimg.com/736x/b4/1d/a4/b41da48878e37f762ff0b1988ed2de82--lunch-recipes-delicious-recipes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
