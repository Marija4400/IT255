import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Flights } from '../models/flights';
import { HttpClientModule } from '@angular/common/http';
import { compileDeclareInjectableFromMetadata, isNgTemplate } from '@angular/compiler';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CipherNameAndProtocol } from 'tls';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  json_location ="https://raw.githubusercontent.com/Marija4400/IT255/master/WizzRyan/src/letovi.json";

  constructor(private _httpClient : HttpClient) {
      }

  private _createObject(item:any){
    return new Flights(item.brLeta,item.avion,item.cena,item.polazak,item.destinacija);
  }    

  public getFlights() : Observable <Flights[]>{
    return this._httpClient.get<Flights[]>(this.json_location).pipe(
      map((data:any[])=>data.map((item:any)=>this._createObject(item)))
    );

  }

  public getFlight(brLeta:Number){
    return this.getFlights().pipe(map(items=>items.find(item=>item.brLeta===brLeta)))
  }
}
