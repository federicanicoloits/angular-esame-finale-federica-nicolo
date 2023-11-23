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
  getSearchDatiMeteo(lat: string, lon: string, tipoChiamata: string) {
    return this.apiService.searchDatiMeteo(lat, lon, tipoChiamata).pipe(
      map((response: any) => {
        const today = new Date();
        const baseUrlWeather = 'https://www.7timer.info/img/misc/about_';
        response.dataseries.forEach((element: any) => {
          let date = today;
          date.setHours(date.getHours() + element.timepoint);
          element.timepointdate = date;
          element.timepointstring =
            date.getDate().toString().padStart(2, '0') +
            '/' +
            (date.getMonth() + 1).toString().padStart(2, '0') +
            '/' +
            date.getFullYear() +
            ' ' +
            date.getHours().toString().padStart(2, '0') +
            ':' +
            date.getMinutes().toString().padStart(2, '0') +
            ':' +
            date.getSeconds().toString().padStart(2, '0');
        });
        if (tipoChiamata === 'astro') {
          response.dataseries.forEach((element: any) => {
            if (element.prec_type === 'none') {
              if (element.lifted_index >= -5) {
                if (element.cloudcover <= 2) {
                  element.png = baseUrlWeather + 'two_clear.png';
                } else if (element.cloudcover > 2 && element.cloudcover < 8) {
                  element.png = baseUrlWeather + 'two_pcloudy.png';
                } else if (element.cloudcover >= 8) {
                  element.png = baseUrlWeather + 'two_cloudy.png';
                }
              } else {
                element.png = baseUrlWeather + 'two_ts.png';
              }
            } else if (element.prec_type === 'two_rain') {
              if (element.lifted_index >= -5) {
                element.png = baseUrlWeather + 'two_rain.png';
              } else {
                element.png = baseUrlWeather + 'two_tsrain.png';
              }
            } else {
              element.png = baseUrlWeather + 'two_snow.png';
            }
          });
        } else if (tipoChiamata === 'civil') {
          response.dataseries.forEach((element: any) => {
            if (element.weather.includes('clear')) {
              element.png = baseUrlWeather + 'civil_clear.png';
            } else if (element.weather.includes('cloudy')) {
              if (element.weather.includes('pcloudy')) {
                element.png = baseUrlWeather + 'civil_pcloudy.png';
              } else if (element.weather.includes('mcloudy')) {
                element.png = baseUrlWeather + 'civil_mcloudy.png';
              } else {
                element.png = baseUrlWeather + 'civil_cloudy.png';
              }
            } else if (element.weather.includes('humid')) {
              element.png = baseUrlWeather + 'civil_fog.png';
            } else if (element.weather.includes('rain')) {
              if (element.weather.includes('lightrain')) {
                element.png = baseUrlWeather + 'civil_lightrain.png';
              } else if (element.weather.includes('rainsnow')) {
                element.png = baseUrlWeather + 'civil_rainsnow.png';
              } else if (element.weather.includes('tsrain')) {
                element.png = baseUrlWeather + 'civil_tsrain.png';
              } else {
                element.png = baseUrlWeather + 'civil_rain.png';
              }
            } else if (
              element.weather.includes('snow') &&
              !element.weather.includes('rain')
            ) {
              if (element.weather.includes('lightsnow'))
                element.png = baseUrlWeather + 'civil_lightsnow.png';
              else {
                element.png = baseUrlWeather + 'civil_snow.png';
              }
            }
            if (element.weather.includes('shower')) {
              if (element.weather.includes('ishower')) {
                element.png = baseUrlWeather + 'civil_ishower.png';
              } else {
                element.png = baseUrlWeather + 'civil_oshower.png';
              }
            } else {
              element.png = baseUrlWeather + 'civil_tstorm.png';
            }
          });
        }
        return response.dataseries as DatiMeteo[];
      })
    );
  }
  getSearchByCity(lat: string, lon: string) {
    return this.apiService.searchCity(lat, lon).pipe(
      map((response: any) => {
        return response.city as string;
      })
    );
  }
}
