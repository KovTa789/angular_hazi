import { Component, OnInit } from '@angular/core';
import { Dish } from '@app/_models';
import { DishService } from '@app/_services';

@Component({
  selector: 'app-dishdash',
  templateUrl: './dishdash.component.html',
  styleUrls: [ './dishdash.component.css' ]
})
export class DishDashComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes.slice(1, 5));
  }
}
