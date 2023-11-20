import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';
import { AlbaTramonto, DatiMeteo } from '../_models/meteo.interface';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private apiService: ApiService) {}
  getSearchForLatAndLon(lat: string, lon: string) {
    return this.apiService.searchForLatAndLon(lat, lon).pipe(
      map((response: any) => {
        return response.results as AlbaTramonto;
      })
    );
  }
  getSearchForLatAndLonUltimiDati(lat: string, lon: string) {
    return this.apiService.searchForLatAndLonUltimiDati(lat, lon).pipe(
      map((response: any) => {
        response.dataseries.forEach((element: any) => {
          const baseCloudCover = 'https://www.7timer.info/img/misc/';
          if (element.cloudcover <= 2) {
            element.cloudcoverpng = baseCloudCover + 'about_two_clear.png';
          } else if (element.cloudcover > 2 || element.cloudcover <= 8) {
            element.cloudcoverpng = baseCloudCover + 'about_two_pcloudy.png';
          } else {
            element.cloudcoverpng = baseCloudCover + 'about_two_cloudy.png';
          }
        });
        return response.dataseries as DatiMeteo[];
      })
    );
  }
}
