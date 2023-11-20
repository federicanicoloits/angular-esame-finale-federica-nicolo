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
      Dettaglio: (route: ActivatedRouteSnapshot) => {
        return inject(MeteoService).getSearchForLatAndLon(
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
