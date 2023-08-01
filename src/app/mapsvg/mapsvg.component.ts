import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../users.service'


@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.svg',
  styleUrls: ['./mapsvg.component.css']
})


export class MapsvgComponent{

  @Output() name = new EventEmitter();
  @Output() capital = new EventEmitter();
  @Output() region = new EventEmitter();
  @Output() income = new EventEmitter();
  @Output() longitude = new EventEmitter();
  @Output() latitude = new EventEmitter();

  constructor(private user: UsersService){}
 
  //get info after clicking on the map, then send it to map and interactive map
  mapClick(event: MouseEvent){
    let path = event.target as any
    let id = path.id
    
    this.user.getData(id).subscribe(data=> {
      let dataSet: any = Object.entries(data)[1][1][0];
      this.name.emit(dataSet.name);
      this.capital.emit(dataSet.capitalCity);
      this.region.emit(dataSet.region.value);
      this.income.emit(dataSet.incomeLevel.value);
      this.longitude.emit(dataSet.longitude);
      this.latitude.emit(dataSet.latitude);
   }) 
}}



