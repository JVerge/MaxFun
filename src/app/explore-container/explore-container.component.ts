import { Component, Input, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonicModule],
  
})

export class ExploreContainerComponent implements OnInit {

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyCFaazb3nlkc1h7lcZwHUuMrChyz0liG3A",
      authDomain: "maxfunactivities.firebaseapp.com",
      databaseURL: "https://maxfunactivities-default-rtdb.firebaseio.com",
      projectId: "maxfunactivities",
      storageBucket: "maxfunactivities.appspot.com",
      messagingSenderId: "722318629140",
      appId: "1:722318629140:web:c392f150e8dcae6ce88a01",
      measurementId: "G-RZP5DP6DST"
    };

    initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const loadEl = document.querySelector('#load');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "j@v.com", "123456")
      .then(() => {
        console.log("Sesio iniciada")
      })
      .catch(() => {
        console.log("Error de sesio")
      });

  }

  @Input() name?: string;

}

