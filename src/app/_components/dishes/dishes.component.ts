import { Component, OnInit } from '@angular/core';
import { Dish } from '@app/_models';
import { DishService } from "@app/_services";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  
  constructor(private dishService: DishService ) { }

// Az itt megadott metódusok a komponens 
// betöltésekor automatikusan meghívódnak
ngOnInit(): void {
this.getDishes();
}

getDishes(): void {
this.dishService.getDishes()
.subscribe(dishes => this.dishes = dishes);
}
}