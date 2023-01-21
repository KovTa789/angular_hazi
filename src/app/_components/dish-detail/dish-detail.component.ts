import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '@app/_models';
import { DishService } from '@app/_services';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish!: Dish;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDishById();
  }

  getDishById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dishService.getDishById(id)
      .subscribe(dish => {
        console.log(dish);
        this.dish = dish;
    });
  }

  save(): void {
    this.dishService.updateDish(this.dish).subscribe(
      () => this.goBack()
    );
  }

  delete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    confirm("Biztos benne hogy  törli ezt a fogást?")
    ? this.dishService.deleteDish(id).subscribe(
      () => this.goBack())
    : "";
  }

  goBack(): void {
    this.location.back();
  }
}
