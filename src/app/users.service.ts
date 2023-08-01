import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private messageSource = new BehaviorSubject<string>('default');
  currentMessage = this.messageSource.asObservable();

  result: any;
  constructor(private http: HttpClient) { }

  //transfer data from one component to the other
  changeMessage(message: string){
    this.messageSource.next(message)
  }

  //Get data from Api

  getData(id: string)
  {
    let url = "https://api.worldbank.org/v2/country" + '/' + id + '?format=json';
  
    return this.http.get(url)
  }

  getRestData(id: string)
  {
  let restUrl: any = 'https://restcountries.com/v3.1/name/' + id + '?fullText=true';
    return this.http.get(restUrl)
  }

  getAllData(){
    let allUrl: any = 'https://restcountries.com/v3.1/all?';
    return this.http.get(allUrl)
  }

  getRestDataCode(id: string){
    let allUrl: any = ' https://restcountries.com/v3.1/alpha/' + id;
    return this.http.get(allUrl)
  }
}
