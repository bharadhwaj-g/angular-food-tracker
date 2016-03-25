import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <h3>Name: {{ food.name }}</h3>
    <p>Description: {{ food.details }}</p>
    <p>Calories: {{ food.calories }}</p>
  </div>
  `
})

export class FoodDisplayComponent {
  public food: Food;
}
