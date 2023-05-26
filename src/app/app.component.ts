import { Component, OnInit } from '@angular/core';
import { FaceSnap} from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap( 
      'Archibale',
      'mon meilleur ami depuis tout petit!',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
    ); 
    this.myOtherSnap = new FaceSnap( 
      'hello kitty',
      'mon meilleur ami depuis tout petit!',
      'https://www.pexels.com/fr-fr/photo/brouiller-jouet-macro-miniature-4066273.jpg',
      new Date(),
      1,
    ); 
    this.myLastSnap = new FaceSnap( 
      'tchoupi',
      'mon meilleur ami depuis tout petit!',
      'https://www.istockphoto.com/photo/cat-with-blue-eyes-looks-at-camera-gm1067347086-285447479?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fchercher%2Ftchoupi%2F&utm_medium=affiliate&utm_source=pexels&utm_term=tchoupi.jpg',
      new Date(),
      2,
    );  
  }
}
