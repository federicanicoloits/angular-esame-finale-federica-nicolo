import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { MeteoService } from './_services/meteo.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home/dettaglio/:lat/:lon',
    component: DettaglioComponent,
    resolve: {
      AlbaETramontoDettaglio: (route: ActivatedRouteSnapshot) => {
        return inject(MeteoService).getSearchAlbaETramonto(
          route.paramMap.get('lat')!,
          route.paramMap.get('lon')!
        );
      },
      DatiMeteoDettaglio: (route: ActivatedRouteSnapshot) => {
        return inject(MeteoService).getSearchDatiMeteo(
          route.paramMap.get('lat')!,
          route.paramMap.get('lon')!
        );
      },
      City: (route: ActivatedRouteSnapshot) => {
        return inject(MeteoService).getSearchByCity(
          route.paramMap.get('lat')!,
          route.paramMap.get('lon')!
        );
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
