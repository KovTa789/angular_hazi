import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishDashComponent, DishDetailComponent, DishesComponent } from './_components';

const routes: Routes = [
  { path: '', redirectTo: '/dishdash', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent },
  { path: 'dishdash', component: DishDashComponent },
  { path: 'detail/:id', component: DishDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }