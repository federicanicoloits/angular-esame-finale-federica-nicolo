import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private apiService: ApiService) {}
  getSearchForLatAndLon(lat: string, lon: string) {
    return this.apiService.searchForLatAndLon(lat, lon).pipe(
      map((response) => {
        return response as any;
      })
    );
  }
}
