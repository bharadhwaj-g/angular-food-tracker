import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <h3>Edit Mode</h3>
    <p><input [(ngModel)]="food.name"/></p>
    <textarea [(ngModel)]="food.details"></textarea>
    <p><input [(ngModel)]="food.calories"/></p>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
