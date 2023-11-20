import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  searchForLatAndLon(lat: string, lon: string) {
    return this.http.get(
      'https://api.sunrisesunset.io/json?lat=' + lat + '&lng=' + lon
    );
  }
  searchForLatAndLonUltimiDati(lat: string, lon: string) {
    return this.http.get(
      'https://www.7timer.info/bin/astro.php?lon=' +
        lon +
        '&lat=' +
        lat +
        '&ac=0&unit=metric&output=json&tzshift=0'
    );
  }
}
