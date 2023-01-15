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
  
  getDish(id: number): Observable<Dish> {
    const dish = DISHES.find(h => h.id === id)!;
    this.msgService.add(`DishService: fetched dish id=${id}`);
    return of(dish);
  }

}