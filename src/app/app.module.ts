import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent, DishDetailComponent,  DishDashComponent } from '@app/_components';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    DishDashComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
