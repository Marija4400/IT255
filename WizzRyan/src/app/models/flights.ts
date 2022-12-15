
import * as internal from "stream";

export class Flights {
    brLeta!: number;
    avion!: number;
    cena!: number;
    polazak!:string;
    destinacija!:string;

    constructor(brLeta: number, avion: number, cena: number,polazak:string,destinacija:string){
            this.brLeta = brLeta;
            this.avion = avion;
            this.cena = cena;
            this.polazak=polazak;
            this.destinacija=destinacija;

    }


}