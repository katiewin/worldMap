import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MapSearchComponent } from './map-search/map-search.component'
import {InteractiveMapComponent } from './interactive-map/interactive-map.component'
import { CountryBlockComponent } from './country-block/country-block.component'

const routes: Routes = [
 
  { path: 'countrySearch', component: MapSearchComponent },
  { path: 'interactive', component: InteractiveMapComponent},
  { path: '', component: HomeComponent},
  { path: 'countrySearch/countryBlock', component: CountryBlockComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes) ], 
   exports: [RouterModule]
})
export class AppRoutingModule { }