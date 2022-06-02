import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//nakon dizajna countries.component-a potrebno je definisati rute..
//posto smo prilikom kreiranja projekta cekirali yes za rute sada su one definisane..
//potrebno je samo definisati rute za nasu komponentu, prvo sto trebamo uraditi jeste import komponente
import { CountriesComponent } from './countries/countries.component';

//nakon importa countriesComponenta potrebno je definisati rute
const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' }, //osnovna ruta otvara pocetnu stranicu i vrsi redirekciju na nasu rutu 
  { path: 'countries', component: CountriesComponent} //ruta 'countries' prikazuje CountriesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
