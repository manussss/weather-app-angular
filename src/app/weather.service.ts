import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //require('dotenv').config();

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '12e81341e3eb4b73698e160697f304dc' //process.env.API_KEY

  constructor(private http: HttpClient) { }

  // method to return 'latitude' and 'longitude' parameters from API
  getWeatherDataByCoords(lat, lon){
    const params = new HttpParams()
      .set('lat',lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey)

      return this.http.get(this.url, { params })
  }

  // method to return the city name
  getWeatherDataByCityName(city: string){
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params })
  }

}
