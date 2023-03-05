import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFlightsRoutingModule } from './search-flights-routing.module';
import { SearchFlightsComponent } from './search-flights.component';


@NgModule({
  declarations: [
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    SearchFlightsRoutingModule
  ]
})
export class SearchFlightsModule { }
