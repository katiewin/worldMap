import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent {
  title = 'Interactive Map'

  name!: string;
  capital!: string;
  region!: string;
  income!: string;
  longitude!: string;
  latitude!: string;

  //change the string info, sent to map & mapsvg
  changeName(name: string){
    this.name = name;
  }

  changeCapital(change: string){
    this.capital = change;
  }

  changeRegion(change: string){
    this.region = change;
  }

  changeIncome(change: string){
    this.income = change;
  }

  changeLongitude(change: string){
    this.longitude = change;
  }

  changeLatitude(change: string){
    this.latitude = change;
  }
}
