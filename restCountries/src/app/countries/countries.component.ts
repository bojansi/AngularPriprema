import { Component, OnInit } from '@angular/core';

//importovanje model klase
import { Country } from '../models/country';
//nakon kreiranja servisa potrebno je injektovati ga u component
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  //odnekle treba dovuci podatke
  countries?: Country[];

  //injektovanje servisa preko konstruktora
  constructor(private countryService: CountryService) { }

  // ngOnInit()- prikazivanje ove komponente u browseru - potrebno dovuci sve drzave
  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data =>{
      this.countries = data;
    })
  }

}
