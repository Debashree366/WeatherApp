import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureconverter'
})
export class TemperatureconverterPipe implements PipeTransform {

  
  transform(value: number, unit: string) {

    if(value && !isNaN(value)){

           if(unit === 'C'){
             var tempareature = (value - 32) * 5/9 ;
             return tempareature.toFixed(2);
           }
           if(unit === 'F'){
            var tempareature = (value * 32) + 1.8 ;
            return tempareature.toFixed(2);
          }
          if(unit === 'K'){
            var tempareature = value - 273.15 ;            
            return Math.round(tempareature);
          }
    }

return;
}


}
