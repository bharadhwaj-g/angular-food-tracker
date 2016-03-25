import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <h3>Edit Mode</h3>
    <p>Name: <input [(ngModel)]="food.name"/></p>
    <p>Description: <textarea [(ngModel)]="food.details"></textarea><p>
    <p>Calories: <input [(ngModel)]="food.calories"/></p>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
