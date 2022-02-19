import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../shared/service/weatherservice.service';
import * as moment from 'moment';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastData;
  lists = {};
  icon: any;
  iconurl: string;
  day: string;
  forecastArr = [];
  city;
  constructor(
    private weatherApi: WeatherserviceService
  ) { }


  ngOnInit() {
    
  }
  getcitydata(){
    this.weatherApi.getForecastData(this.city).subscribe(response => {
      // console.log(response);
      if (response) {
        this.forecastData = response;
        // console.log(this.forecastData);
        for (var i = 0; i < this.forecastData.list.length; i += 8) {
          this.lists = this.forecastData.list[i];

          let date = new Date(this.forecastData.list[i].dt * 1000);
          this.day = moment(date).format('dddd');
         
          // console.log(this.lists);
          // console.log(this.forecastArr);
          this.icon = this.forecastData.list[i].weather[0].icon;
          this.iconurl = `http://openweathermap.org/img/w/${this.icon}.png`;
          // console.log(this.iconurl);
          // console.log(this.forecastArr);
          this.forecastArr.push(this.lists);
          this.forecastData.list[i].dt = this.day;
          console.log(this.forecastData.list[i].dt)


        }


        //  this.icon = this.forecastData.weather[0].icon;
        //  this.iconurl = `http://openweathermap.org/img/w/${this.icon}.png`;







      }
    })
  }}


