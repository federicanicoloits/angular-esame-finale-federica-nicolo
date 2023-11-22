import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  lat = '';
  lon = '';
  InputValidation(): boolean {
    const latPattern = /^(-?\d{1,2}(?:\.\d{1,6})?|\b90(?:\.0{1,6})?)$/;
    const longPattern = /^(-?\d{1,3}(?:\.\d{1,6})?|\b180(?:\.0{1,6})?)$/;
    return latPattern.test(this.lat) && longPattern.test(this.lon);
  }
}
