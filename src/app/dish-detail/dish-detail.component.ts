import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../_models/dish';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  @Input() dish?: Dish;

  constructor() { }

  ngOnInit(): void {

  }
}
