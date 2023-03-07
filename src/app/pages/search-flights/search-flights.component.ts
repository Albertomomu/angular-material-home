import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements OnInit{

  data: any;

  constructor(private http: HttpClient) { }

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

  /*  flights.map(flight => {
      const flightInfo = {
        fromAirport: flight.getAttribute('FLSDepartureName'),
        toAirport: flight.getAttribute('FLSArrivalName'),
        departureDateTime: flight.getAttribute('FLSDepartureDateTime')
      }
      resultData.push(flightInfo);

    })
    return resultData;*/
  }

  ngOnInit() {
    this.getFetch()
  }

}
