import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MapsvgComponent } from './mapsvg/mapsvg.component';
import { AppRoutingModule } from './app-routing.module';
import { MapSearchComponent } from './map-search/map-search.component';
import { HeaderComponent } from './header/header.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountryBlockComponent } from './country-block/country-block.component';
import { MapComponent } from './map-info/map-info.component'

@NgModule({
  declarations: [
    AppComponent,
    MapsvgComponent,
    MapComponent,
    MapSearchComponent,
    HeaderComponent,
    InteractiveMapComponent,
    HomeComponent,
    CountryBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
