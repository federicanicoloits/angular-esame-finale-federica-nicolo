import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { AlbaTramonto, DatiMeteo } from '../_models/meteo.interface';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private apiService: ApiService) {}
  getSearchAlbaETramonto(lat: string, lon: string) {
    return this.apiService.searchAlbaETramonto(lat, lon).pipe(
      map((response: any) => {
        return response.results as AlbaTramonto;
      })
    );
  }
  getSearchDatiMeteo(lat: string, lon: string) {
    return this.apiService.searchDatiMeteo(lat, lon).pipe(
      map((response: any) => {
        response.dataseries.forEach((element: any) => {
          const baseUrlWeather = 'https://www.7timer.info/img/misc/about_two_';
          if (element.prec_type === 'none') {
            if (element.lifted_index >= -5) {
              if (element.cloudcover <= 2) {
                element.png = baseUrlWeather + 'clear.png';
              } else if (element.cloudcover > 2 && element.cloudcover < 8) {
                element.png = baseUrlWeather + 'pcloudy.png';
              } else if (element.cloudcover >= 8) {
                element.png = baseUrlWeather + 'cloudy.png';
              }
            } else {
              element.png = baseUrlWeather + 'ts.png';
            }
          } else if (element.prec_type === 'rain') {
            if (element.lifted_index >= -5) {
              element.png = baseUrlWeather + 'rain.png';
            } else {
              element.png = baseUrlWeather + 'tsrain.png';
            }
          } else {
            element.png = baseUrlWeather + 'snow.png';
          }
        });
        console.log(response.dataseries);
        return response.dataseries as DatiMeteo[];
      })
    );
  }
}
