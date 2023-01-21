import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '@app/_models/dish';
import { catchError, tap } from 'rxjs/operators';
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
    return this.http.post<Dish>(`${environment.apiUrl}/posts`, dish, httpOption).pipe(
      tap(dish => console.log(`inserted dish = ${JSON.stringify(dish)}`)),
      catchError(error => error)
    );
  }

  updateDish(dish: Dish) {
    return this.http.put<Dish>(`${environment.apiUrl}/posts/${dish.id}`, dish, httpOption).pipe(
      tap(updatedDish => console.log(`updated dish = ${JSON.stringify(updatedDish)}`)),
      catchError(error => error)
    );
  }

  deleteDish(dishId: Number) {
    return this.http.delete<Dish>(`${environment.apiUrl}/posts/${dishId}`, httpOption).pipe(
      tap(() => console.log(`deleted dish with id = ${dishId}`)),
      catchError(error => error)
    );

  }
}