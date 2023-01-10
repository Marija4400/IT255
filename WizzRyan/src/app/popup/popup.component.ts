import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
editdata:any;
  constructor(private builder:FormBuilder,private dialog:MatDialog, private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if(this.data.id!=''&& this.data.id!=null){
      this.api.GetCompanybycode(this.data.id).subscribe(response=>{
        this.editdata=response;
        this.companyform.setValue({id:this.editdata.id,brLeta:this.editdata.brLeta,polazak:this.editdata.polazak,
        destinacija:this.editdata.destinacija,vreme:this.editdata.vreme});

      });
    }
  }

  companyform=this.builder.group({
    id:this.builder.control({value:'',disabled:true}),
    brLeta:this.builder.control('',Validators.required),
    polazak:this.builder.control('',Validators.required),
    destinacija:this.builder.control('',Validators.required),
    vreme:this.builder.control('',Validators.required),
  

  });

  SaveCompany(){
    if(this.companyform.valid){
      const Editid = this.companyform.getRawValue().id;
      if(Editid!=''&&Editid!=null){
        this.api.UpdateCompany(Editid,this.companyform.getRawValue()).subscribe(response =>{
          this.closepopup();
          alert("Uspesno izmenjeno!")
        });

      }else{
      this.api.CreateCompany(this.companyform.value).subscribe(response =>{
        this.closepopup();
        alert("Uspesno sacuvano!")
      });
    }

    }
  }

  closepopup(){
    this.dialog.closeAll();
  }

}
