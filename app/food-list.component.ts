import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent],
  template: `
    <div *ngFor="#food of foodList">
      <h3 (click)="foodClicked(food)">{{ food.name }}</h3>
    </div>
    <food-display *ngIf="selectedFood" [food]="selectedFood"></food-display>
  `

})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood= clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
