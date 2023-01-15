import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from '@app/_models';
import { DishService } from '@app/_services';

@Component({
  selector: 'app-dishdash',
  templateUrl: './dishdash.component.html',
  styleUrls: [ './dishdash.component.css' ]
})
export class DishDashComponent implements OnInit {
  
  dishes: Dish[] = [];
  dishForm!: FormGroup;

  constructor(private dishService: DishService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDishes();
    this.createDishForm();
  }

  getDishes(): void {
    this.dishService.getAllDishes().subscribe(data => this.dishes = data);
  }

  createDishForm() {
    this.dishForm = this.fb.group({
      dishName: ['', Validators.required]
    })
  }

  onSubmit() {
    let obj: Dish = {
      name: this.dishForm.value.dishName
    };
    this.dishService.addDish(obj).subscribe(() => {
      this.getDishes();
    });
    this.dishForm.reset();
  }
}
