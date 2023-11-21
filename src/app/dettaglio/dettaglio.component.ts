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
  tramonto: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ AlbaETramontoDettaglio }) => {
      this.albaTramontoObj = AlbaETramontoDettaglio;
      this.tramonto = this.albaTramontoObj.sunset;
    });
    this.activatedRoute.data.subscribe(({ DatiMeteoDettaglio }) => {
      this.meteoObj = DatiMeteoDettaglio;
    });
  }
}
