import { Component } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriesPipe } from './calories.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent, NewFoodComponent],
  template: `
    <new-food (onSubmitNewFood)="addFood($event)"></new-food>
    <h3>What I've Eaten Today</h3>
    <select class="filter" (change)="onFilterChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Under 300 Calories</option>
    <option value="high">Over 300 Calories</option>
    </select>
    <div class="food-list" *ngFor="#food of foodList | calories:calorieFilter">
      <h3 (click)="foodClicked(food)"><span class="food-name">{{ food.name }}</span></h3>
      <food-display *ngIf="food === selectedFood" [food]="selectedFood"></food-display>
    </div>
  `

})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public calorieFilter: string = "all";
  foodClicked(clickedFood: Food): void {
    if(clickedFood === this.selectedFood) {
      this.selectedFood = null;
    } else {
      this.selectedFood = clickedFood;
    }
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
