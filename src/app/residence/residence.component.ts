import { Component } from '@angular/core';
import {Residence} from "../models/residence";
import {Apartment} from "../models/apartement";

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  //var1!:string;
  s:string="Bonjour !!"; //Interpolation
  prop:boolean=false; //Property Binding
  //Event Binding
  add(){
    console.log("Test event Bind !!");
  }
  //Two-way event Binding

  imageUrl:string="../../assets/";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":this.imageUrl+"img1.jpg"},
    {id:2,"name": "El yasmine", "address":"Ezzahra","image":this.imageUrl+"img1.jpg"},
    {id:3,"name": "El Arij", "address":"Rades","image":this.imageUrl+"img1.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5", "image":this.imageUrl+"img1.jpg"} ];
  listApartments:Apartment[]=[
    {id:1,"numAppart":1,"numEtage":1,"surface":100,"terrasse":"oui","surfaceTerrasse":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"numAppart":2,"numEtage":1,"surface":130,"terrasse":"non","surfaceTerrasse":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"numAppart":3,"numEtage":2,"surface":150,"terrasse":"oui","surfaceTerrasse":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
  ]
  surface:number=0;
}
