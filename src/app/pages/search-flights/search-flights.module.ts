import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchFlightsRoutingModule } from './search-flights-routing.module';
import { SearchFlightsComponent } from './search-flights.component';


@NgModule({
  declarations: [
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    SearchFlightsRoutingModule,
    HttpClientModule
  ]
})
export class SearchFlightsModule { }
