import { Component, OnInit } from '@angular/core';
import { Dish } from '../_models/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dish: Dish = {
    id: 1,
    name: 'Rántotthús'
  };

constructor() { }

ngOnInit(): void {

}
}