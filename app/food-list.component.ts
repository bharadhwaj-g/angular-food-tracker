import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { NewFoodComponent } from './new-food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent, NewFoodComponent],
  template: `
    <div *ngFor="#food of foodList">
      <h3 *ngIf="food !== selectedFood" (click)="foodClicked(food)">{{ food.name }}</h3>
      <food-display *ngIf="food === selectedFood" [food]="selectedFood"></food-display>
    </div>
    <new-food (onSubmitNewFood)="addFood($event)"></new-food>
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
  addFood(newFood: string): void {
    var foodCalories: number = parseInt(newFood[2]);
    this.foodList.push(
      new Food(newFood[0], newFood[1], foodCalories, this.foodList.length)
    )
  }
}
