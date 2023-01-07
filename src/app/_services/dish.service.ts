import { Injectable } from '@angular/core';
import { Dish, DISHES } from '@app/_models';
import { Observable, of } from 'rxjs';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private msgService: MsgService) { }

  getDishes(): Observable<Dish[]> {
    const dishes = of(DISHES);
    this.msgService.add('DishService: fetched dishes');
    return dishes;
  }
}