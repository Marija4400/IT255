import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RowsComponent } from './rows/rows.component';

@NgModule({
  declarations: [
    AppComponent,
    RowsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
