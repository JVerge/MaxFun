import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { XatComponent } from '../xat/xat.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent, XatComponent]
})

export class Tab4Page implements OnInit {
  a: string = '';
  mostraLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log("entra tab4");

    const galetes = document.cookie.split(';');
    for (let i = 0; i < galetes.length; i++) {
      const galeta = galetes[i].trim();
      if (galeta.startsWith('usuarimfa01')) {
        const valor = galeta.substring('usuarimfa01'.length, galeta.length);
        const [uidgrup, nom] = valor.split(':');
        console.log(uidgrup + nom)
        break;
      }
    }


  }

  metodeDelPare(a: boolean) {
    this.mostraLogin = a;
    console.log("Metode del pare")
  }

}



