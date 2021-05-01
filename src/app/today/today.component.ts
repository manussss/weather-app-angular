import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  lat;
  lon;
  weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  // Method responsible for indicating the geolocation through the browser
  getLocation(){
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude
        this.lon = success.coords.longitude

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
          console.log(data)
        })
      })
    }
  }

}
