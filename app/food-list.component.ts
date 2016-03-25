import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriesPipe } from './calories.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent, NewFoodComponent],
  template: `
    <select (change)="onFilterChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="low">Under 300 Calories</option>
      <option value="high">Over 300 Calories</option>
    </select>
    <div *ngFor="#food of foodList | calories:calorieFilter">
      <h3 (click)="foodClicked(food)">{{ food.name }}</h3>
      <food-display *ngIf="food === selectedFood" [food]="selectedFood"></food-display>
    </div>
    <new-food (onSubmitNewFood)="addFood($event)"></new-food>
  `

})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public calorieFilter: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    if(clickedFood === this.selectedFood) {
      this.selectedFood = null;
    } else {
      this.selectedFood = clickedFood;
    }
    this.onFoodSelect.emit(clickedFood);
  }
  addFood(newFood: string): void {
    var foodCalories: number = parseInt(newFood[2]);
    this.foodList.push(
      new Food(newFood[0], newFood[1], foodCalories, this.foodList.length)
    )
  }
  onFilterChange(filterOption) {
    this.calorieFilter = filterOption;
  }
}
