import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import {MatNativeDateModule} from '@angular/material/core';

import { SearchFlightsRoutingModule } from './search-flights-routing.module';
import { SearchFlightsComponent } from './search-flights.component';


@NgModule({
  declarations: [
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    SearchFlightsRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class SearchFlightsModule { }
