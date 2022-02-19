import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../shared/service/weatherservice.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  weatherdata ;
  tempround;
  icon: any;
  iconurl: string;
  value = 'Clear me';
  city;

  constructor(
    private weatherApi : WeatherserviceService
  ) { }

  ngOnInit() {
  
  }

  getcitydata(){
    this.weatherApi.getWeatherData(this.city).subscribe(response=>{
      console.log(this.city);
      if(response){
      this.weatherdata = response;
      this.icon = this.weatherdata.weather[0].icon;
      this.iconurl = `http://openweathermap.org/img/w/${this.icon}.png`;
      
      }
    })
  }
   
}
