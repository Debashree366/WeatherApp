import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  baseUrl : string = "https://api.openweathermap.org/data/2.5/weather";
  apikey = "f9adb4f30d6e867fc51ef4498cb59fb3";
  forecastUrl : string = "https://api.openweathermap.org/data/2.5/forecast"
  constructor(
    private http: HttpClient
  ) { 

  }
  getWeatherData(city){
    return this.http.get(this.baseUrl+"?q="+city+"&appid="+this.apikey)
    
  }
  getForecastData(city){
    return this.http.get(this.forecastUrl+"?q="+city+"&appid="+this.apikey)
  }
}
