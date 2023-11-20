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
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ Dettaglio }) => {
      this.albaTramontoObj = Dettaglio;
    });
    this.activatedRoute.data.subscribe(({ UltimiDatiDettaglio }) => {
      console.log(UltimiDatiDettaglio);
      this.meteoObj = UltimiDatiDettaglio;
    });
  }
}
