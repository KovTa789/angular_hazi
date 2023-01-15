import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
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

ngOnInit(): void {
  this.getDishes();
}

getDishes(): void {
  this.dishService.getAllDishes()
  .subscribe(data => this.dishes = data);
}

}