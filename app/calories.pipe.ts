import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalories = args[0];
    if(desiredCalories === "low") {
      return input.filter((food) => {
        return food.calories <= 300;
      });
    } else if (desiredCalories === "high") {
      return input.filter((food) => {
        return food.calories > 300;
      });
    } else {
      return input;
    }
  }
}
