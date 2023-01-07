import { Component, OnInit } from '@angular/core';
import { Dish } from '../_models/dish';
import {DISHES} from '../_models/mock-dishes';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes = DISHES;
  selectedDish?: Dish;

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

}