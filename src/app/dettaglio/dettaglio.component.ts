import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo.service';
import { ActivatedRoute } from '@angular/router';
import { AlbaTramonto, DatiMeteo } from '../_models/meteo.interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  albaTramontoObj!: AlbaTramonto;
  meteoObj: DatiMeteo[] = [];
  lat = '';
  lon = '';
  city = '';
  tipo = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tipo = params['tipo'];
    });
    this.activatedRoute.data.subscribe(({ AlbaETramontoDettaglio }) => {
      this.albaTramontoObj = AlbaETramontoDettaglio;
    });
    this.activatedRoute.data.subscribe(({ DatiMeteoDettaglio }) => {
      this.meteoObj = DatiMeteoDettaglio;
    });
    this.activatedRoute.data.subscribe(({ City }) => {
      this.city = City;
    });
    this.activatedRoute.params.subscribe((params) => {
      this.lat = params['lat'];
      this.lon = params['lon'];
    });
  }
}
