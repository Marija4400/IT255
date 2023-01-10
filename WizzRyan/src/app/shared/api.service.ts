import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { kompanijamodel } from '../Model/kompanijamodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurl='http://localhost:3000/kompanija';


Getallcompany():Observable<kompanijamodel[]>{
  return this.http.get<kompanijamodel[]>(this.apiurl);
}

GetCompanybycode(id:any):Observable<kompanijamodel>{
  return this.http.get<kompanijamodel>(this.apiurl+'/'+id);
}

RemoveCompanybycode(id:any){
  return this.http.delete(this.apiurl+'/'+id);
}

CreateCompany(companydata:any){
  return this.http.post(this.apiurl, companydata);
}

UpdateCompany(id:any,companydata:any){
  return this.http.put(this.apiurl+'/'+id, companydata);
}
}
