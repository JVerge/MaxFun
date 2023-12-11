import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xat',
  templateUrl: './xat.component.html',
  styleUrls: ['./xat.component.scss'],
  standalone: true
})
export class XatComponent  implements OnInit {

  constructor() { }

  

  ngOnInit() {
    console.log("entra xat")
  }
 
  //Entraxat es defineix xom un emisor que passa un valor string, si no passa cap valor ha de ser void
  @Output() EntraXat  = new EventEmitter<boolean>();

  ComprobaUID(){
    const uidgrup: HTMLInputElement = document.querySelector("#uidgrup") as HTMLInputElement;
    const nom: HTMLInputElement = document.querySelector("#nom") as HTMLInputElement;
    console.log(uidgrup.value)
    //Si es correcte guarda els valors a una galeta i pasa el valor false al pare perque no es vegi login
    if (uidgrup.value === "peBBLVpYQHWJrPxmzzXxpeA5QN03"){
      console.log("usuari correcte")
      this.EntraXat.emit(false);
      const valor = uidgrup.value + ':' + nom.value;
      document.cookie = 'usuarimfa01' + valor;
    }     
  }
  
}
