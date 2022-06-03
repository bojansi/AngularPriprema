import { Component, OnInit } from '@angular/core';

//za importovanje
import { Zaposleni } from '../models/zaposleni';
import dataZaposleni from '../zaposleni.json';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  zaposleni?: Zaposleni[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idFirma = Number(this.route.snapshot.paramMap.get('idFirma'));

    this.zaposleni = this.getZaposleniById(idFirma);
  }
  
  getZaposleniById(_idFirma: number){
    var niz= new Array();
    for(let i=0; i<dataZaposleni.length; i++){
      if(dataZaposleni[i].idFirma == _idFirma){
        niz.push(dataZaposleni[i]);
      }
    }
    return niz;

  }
}
