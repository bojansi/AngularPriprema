import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import komponenti
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { FirmaComponent } from './firma/firma.component';


const routes: Routes = [
  { path : '', redirectTo: '/firme', pathMatch: 'full' },
  { path : 'firme', component : FirmaComponent},
  { path : 'zaposleni/:idFirma', component : ZaposleniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
