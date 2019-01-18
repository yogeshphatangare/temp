import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'weather-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})


export class AboutUsComponent {
  selected = 'Pune';
  WeatherData: any;
  cities: City[] = [
    { id: 1, name: 'Pune' },
    { id: 2, name: 'Ahmednagar' },
    { id: 3, name: 'Mumbai' }
  ];
  constructor(private dataservice: DataService) {
  }

 public getWeatherData() {
  this.dataservice.getData(this.selected).subscribe(data => {
    this.WeatherData = data;
    console.log(data);
  });

  }

}
export interface City {
  id: number;
  name: string;
}
