import { Injectable } from '@angular/core';
//preko http protokola dovlaci podatke znaci moramo prvo importovati httpClient
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; //podaci se sa servera vracaju kao observable
import { Country } from './models/country'; //model

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //u konstruktoru je potrebno injektovati http servis
  constructor(private http: HttpClient) { }

  //vraca observable niz Country preko http.get
  getAllCountries():Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region');
  }
}
