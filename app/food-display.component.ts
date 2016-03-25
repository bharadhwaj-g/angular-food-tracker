import { Component, EventEmitter } from 'angular2/core';
import { EditFoodComponent } from './edit-food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  directives: [EditFoodComponent],
  template: `
  <div *ngIf="!editMode">
    <h3>Name: {{ food.name }}</h3>
    <p>Description: {{ food.details }}</p>
    <p>Calories: {{ food.calories }}</p>
    <button (click)="clickEdit()">Edit</button>
  </div>
  <div *ngIf="editMode">
    <edit-food [food]="food"></edit-food>
    <button (click)="clickReturn()">Done</button>
  </div>
  `
})

export class FoodDisplayComponent {
  public food: Food;
  public editMode: boolean = false;
  clickEdit(): void {
    this.editMode = true;
  }
  clickReturn(): void {
    this.editMode = false;
  }
}
