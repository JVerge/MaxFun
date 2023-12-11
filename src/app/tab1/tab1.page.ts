import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})

export class Tab1Page implements OnInit {
  firebase: any;
  usuari: string = "peBBLVpYQHWJrPxmzzXxpeA5QN03"

  constructor() { }

  ngOnInit(): void {
    console.log("iniciat")
  }

  saveDB() {
    this.firebase.database().ref('users/' + this.usuari + 'nom').set({ nom: "cadenaConceptes", })
  }

  readDB(){

  }
}
