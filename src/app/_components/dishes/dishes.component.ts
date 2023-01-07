import { Component, OnInit } from '@angular/core';
import { Dish } from '@app/_models';
import { DishService, MsgService } from "@app/_services";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  selectedDish?: Dish;

  constructor(private dishService: DishService, 
    private msgService: MsgService) { }

// Az itt megadott metódusok a komponens 
// betöltésekor automatikusan meghívódnak
ngOnInit(): void {
this.getDishes();
}

onSelect(dish: Dish): void {
this.selectedDish = dish;
this.msgService.add(`DishesComponent: Selected dish id=${dish.id}`);
}

getDishes(): void {
this.dishService.getDishes()
.subscribe(dishes => this.dishes = dishes);
}
}