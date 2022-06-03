import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirmaComponent } from './firma/firma.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';

@NgModule({
  declarations: [
    AppComponent,
    FirmaComponent,
    ZaposleniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
