import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-country-block',
  templateUrl: './country-block.component.html',
  styleUrls: ['./country-block.component.css']
})
export class CountryBlockComponent {
  
constructor(private user: UsersService, private router: Router){}

message:any
myCountry:any = {}
officialName:any
nativeName:any
tld:any
region:any
subregion:any
capital:any
currencies:any
languages: any
flag: any
population: any
borders: any

title = 'Where in the World'

//go back to country search when finished
back(){
  this.router.navigateByUrl('countrySearch')    
}

ngOnInit() {
  //get the data from map-search section
  this.user.currentMessage.subscribe(message => this.message = message)

  //find out if the message is a country/get api info/format it before sending to assignment
  if (this.message == 'default'){
    this.router.navigateByUrl('countrySearch')
  }else {
    
    this.user.getRestData(this.message).subscribe(data=> {
    this.myCountry = Object.entries(data)[0][1]
    this.assignment(this.myCountry)})
  }}

  //assign the info for the countries 
assignment(myCountry: any){
  this.officialName = this.myCountry.name.official
  this.nativeName = Object.entries(this.myCountry.name.nativeName)[0][1]
  this.nativeName = Object.values(this.nativeName)[0]
  this.region = this.myCountry.region
  this.subregion = this.myCountry.subregion
  this.capital = this.myCountry.capital[0]
  this.currencies = Object.values( this.myCountry.currencies)[0] 
  this.currencies = this.currencies.name
  this.tld = Object.values(this.myCountry.tld)
  this.languages = Object.values(this.myCountry.languages)
  this.languages = this.languages.toString().replaceAll(',', ', ')
  this.flag = this.myCountry.flags.png
  this.population =this.myCountry.population
  this.borders = this.myCountry.borders
}

  //get info after clicking the border countries and send to assignment
borderClick(event: any){
  this.message = event
  this.user.getRestDataCode(this.message).subscribe(data=> {
    this.myCountry = Object.entries(data)[0][1]
    this.assignment(this.myCountry)
  })}

}
