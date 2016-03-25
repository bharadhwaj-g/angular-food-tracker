import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <label>Name:</label>
    <p><input [(ngModel)]="food.name"/></p>
    <label>Description:</label>
    <p><textarea [(ngModel)]="food.details"></textarea></p>
    <label>Calories:</label>
    <p><input [(ngModel)]="food.calories"/></p>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
