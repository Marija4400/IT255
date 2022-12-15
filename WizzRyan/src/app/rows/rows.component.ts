import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Flights } from '../models/flights';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  userForm: FormGroup;
  listData!:Flights[];
  cena:number = 0;

  constructor(private fb: FormBuilder,private _FlightService:FlightService){

     this._FlightService.getFlights().subscribe((data)=>{this.listData=data});
    

    this.userForm = this.fb.group({
      name :['',Validators.required,Validators.minLength(6)],
      address:['',Validators.required],
      contactNo:['',Validators.required],
      gender:['',Validators.required]

      
    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset(){
    this.userForm.reset();
  }

  removeItem(element: any){
    this.listData.forEach((value: any,index: any) => {
      if(value == element)
      this.listData.splice(index,1);
      });
      
  }

  public uvecajCenu(){
    this.cena=0;
    const ch1:any = document.getElementById("ch1");
    const ch2:any = document.getElementById("ch2");
    const ch3:any= document.getElementById("ch3");

    if(ch1.checked==true){
      this.cena+=1000;

    }
    
    if(ch2.checked==true){
      this.cena+=500;
      
    }
    
    if(ch3.checked==true){
      this.cena+=100;
      
    }
  }

  public getPrice(brLeta:Number){
    const kolicina = document.getElementById("kolicina" + brLeta) as HTMLInputElement | null;
    let flight = this.listData.find(flight=>flight.brLeta === brLeta);
    if(kolicina !== null){
      alert("Vas racun je: " + (flight!.cena + this.cena) * parseInt(kolicina?.value));

    }

  }

  ngOnInit() {
   
  }

}
