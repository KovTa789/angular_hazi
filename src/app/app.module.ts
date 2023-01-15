import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent, DishDetailComponent, MsgsComponent } from '@app/_components';
import { DishDashComponent } from './_components/dishdash/dishdash.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    MsgsComponent,
    DishDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
