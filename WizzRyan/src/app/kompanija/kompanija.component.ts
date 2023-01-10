import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { kompanijamodel } from '../Model/kompanijamodel';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-kompanija',
  templateUrl: './kompanija.component.html',
  styleUrls: ['./kompanija.component.scss']
})
export class KompanijaComponent implements OnInit {

  constructor(private dialog:MatDialog,private api:ApiService) { }

  companydata!:kompanijamodel[];

  ngOnInit(): void {
  }

  displayColums:string[]=["id","brLeta","polazak","destinacija","vreme","action"]

  Openpopup(id: any) {
    const _popup=this.dialog.open(PopupComponent, {
        width: '500px',
        data: {
          id: id
        }
      })
      _popup.afterClosed().subscribe(r=>{
        this.LoadCompany();
      });
  }
  
  LoadCompany(){
    this.api.Getallcompany().subscribe(response=>{
      this.companydata=response;
  
    })
  }
  
  EditCompany(id:any){
    this.Openpopup(id);
  }
  
  RemoveCompany(id:any){
    this.api.RemoveCompanybycode(id).subscribe(r=>{
      this.LoadCompany();
  
    });
  
  }

}
