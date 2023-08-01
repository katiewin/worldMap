import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from '../users.service'
import {KeyValue} from '@angular/common';


@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})


export class MapSearchComponent  {
title = 'Where in the world?'
public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
  return -1;
}

objectKeys = Object.keys;
countryName: any = {}
input = ''
name = ''
@Input() country = {}

constructor(private user: UsersService){}
message:any = ' '

//recieve data from the search box
search(input:any){
  input = input.toLowerCase()
  console.log(input)
  
  this.user.getRestData(input).subscribe(data => {
    this.countryName = data})
}

ngOnInit() {
  //get the data for all api countries and is then used in the HTML
  this.user.getAllData().subscribe(data => {
    this.countryName = Object.values(data)
    this.countryName = Object.values(this.countryName)

  })  
  this.user.currentMessage.subscribe(message => this.message = message)
}

//get the name after clicking on a box to send to country-block
countryCLick(click: any){
  this.country = click.value.name.official.toLowerCase()
  this.newMessage(this.country)
   
  }  

//sends to country block
newMessage(country: any) {
  this.user.changeMessage(country)
}
}