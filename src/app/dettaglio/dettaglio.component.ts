import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  meteoObj: any;
  constructor(
    private meteoService: MeteoService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ Dettaglio }) => {
      console.log(Dettaglio);
      this.meteoObj = Dettaglio;
    });
  }
}
