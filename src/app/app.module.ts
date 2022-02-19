import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureconverterPipe } from './shared/temperatureconverter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ForecastComponent,
    TemperatureconverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
