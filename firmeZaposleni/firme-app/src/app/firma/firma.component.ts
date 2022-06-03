import { Component, OnInit } from '@angular/core';

//za importovanje
import { Firma } from '../models/firma';
import data from '../firma.json';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {

  firme?: Firma[];

  constructor() { }

  ngOnInit(): void {
    this.firme = data;
  }

}
