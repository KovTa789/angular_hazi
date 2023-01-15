import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '@app/_models/dish';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getAllDishes() {
    return this.http.get<Dish[]>(`${environment.apiUrl}/posts`, httpOption);
  }

  getDishById(dishId: Number) {
    return this.http.get<Dish>(`${environment.apiUrl}/posts/${dishId}`, httpOption);
  }

  addDish(dish: Dish) {
    return this.http.post<Dish>(`${environment.apiUrl}/posts`, dish, httpOption);
  }
}