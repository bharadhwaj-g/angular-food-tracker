import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Tracker</h1>
      <food-list [foodList]="foods"></food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Banana", "Ate it right when I woke up", 105, 0),
      new Food("Eggs", "Two fried eggs", 180, 1),
      new Food("Orange juice", "Medium glass of low pulp orange juice", 222, 2),
      new Food("Dates", "Incessantly snacked on dates all afternoon", 532, 3),
      new Food("Ice Cream", "Too much Ben & Jerry's Half Baked while watching TV", 640, 4),
    ]
  }
}
