import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../_services/meteo.service';
import { ActivatedRoute } from '@angular/router';
import { AlbaTramonto } from '../_models/meteo.interface';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  meteoObj!: AlbaTramonto;
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
