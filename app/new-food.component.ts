import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div>
    <h3>Add Food</h3>
      <label>Enter Food Name:</label>
      <input placeholder="name" #newName>
      <label>Enter Details:</label>
      <textarea placeholder="details" #newDetails></textarea>
      <label>Enter Calories:</label>
      <input placeholder="calories" #newCalories>
      <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) {
    this.onSubmitNewFood.emit([name.value, details.value, calories.value]);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
