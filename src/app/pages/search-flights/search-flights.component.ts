import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements OnInit{

  data: any;
  myControl = new FormControl('');
  options: string[] = ['Valencia (VLC)', 'Milan (MIL)', 'Barcelona (BCN)'];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.getFetch()
  }

  getFetch = async () => {
    const parser = new DOMParser();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'df163c1acdmsh067ecb6cddbce09p120c32jsn5325a2ac0db8',
        'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
        'Content-Type': 'text/xml'
      }
    };
    
    const pet = this.http.get('https://timetable-lookup.p.rapidapi.com/TimeTable/BCN/MIL/20230521/', {...options, responseType: 'text'})
    
    pet.subscribe(data => {

      const xmlDoc = parser.parseFromString(data, 'text/xml');

      const flights = Array.from(xmlDoc.getElementsByTagName('FlightDetails'));

      flights.map(flight => {
        const flightInfo = {
          departureDateTime: flight.getAttribute('FLSDepartureDateTime'),
          departureAirportCode: flight.getAttribute('FLSDepartureCode'),
          cepartureAirportName: flight.getAttribute('FLSDepartureName'),
          arrivalDateTime: flight.getAttribute('FLSArrivalDateTime'),
          arrivalAirportCode: flight.getAttribute('FLSArrivalCode'),
          arrivalAirportName: flight.getAttribute('FLSArrivalName'),
        }
        console.log(flightInfo)
      })
  
      console.log(flights)
      //return flights;
    });

  }

  getFlights() {

    const resultData: any = [];

    const flights = this.getFetch();

    console.log(flights)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
