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
    this.mySnap = {
      title:'Archibale',
      description:'mon meilleur ami depuis tout petit!',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps:0,
      location: 'paris',
    }; 
    this.myOtherSnap = {
      title:'hello kitty',
      description:'mon meilleur ami depuis dessin depuis longtemps!',
      imageUrl:'https://unsplash.com/fr/photos/GAhBHu0GJZg.jpg',
      createdDate: new Date(),
      snaps :1,
      location: 'la Montagne',
    }; 
    this.myLastSnap = {
      title:'pepa',
      description:'mon meilleur !',
      imageUrl:'https://unsplash.com/fr/photos/pElSkGRA2NU.jpg',
      createdDate: new Date(),
      snaps :2,
    };  
  }
}
