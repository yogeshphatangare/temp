import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getData(city: string) {
    const data = {
      q: city,
      APPID: 'd55dd8cb93eb2d8c4ca22c0ccd6a7b6c',
      units: 'imperial',
      cityname: 'pune'
    };
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.q}&APPID=${data.APPID}&units=imperial`);
  }
}
