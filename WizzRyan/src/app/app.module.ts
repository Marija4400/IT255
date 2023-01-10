import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RowsComponent } from './rows/rows.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KompanijaComponent } from './kompanija/kompanija.component';
import { PopupComponent } from './popup/popup.component';
import { MaterialModule } from 'src/MaterialModule';

@NgModule({
  declarations: [
    AppComponent,
    RowsComponent,
    NavbarComponent,
    PonudaComponent,
    PreporukaComponent,
    ONamaComponent,
    KompanijaComponent,
    PopupComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
