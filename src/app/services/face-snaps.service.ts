import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
    /* cela explique a angular qu'il doit enregistrer a la racine de l'application et permet de se racurer qu'il n'ya qu'une seul instance de ce service
    donc tout l'application partagera les memes donnees et la meme logique 
    
    les service ne sont pas insta ncier de la meme maniere que les component donc un service n'a pas de methode onInit */
    
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap []  =  [ 
        {
            id:0,
            title:'Archibale',
            description:'mon meilleur ami depuis tout petit!',
            imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps:34,
            location: 'paris',
        },

        {
            id:1,
            title:'hello kitty',
            description:'mon meilleur ami depuis dessin depuis longtemps!',
            imageUrl:'https://unsplash.com/fr/photos/GAhBHu0GJZg.jpg',
            createdDate: new Date(),
            snaps :12,
            location: 'la Montagne',
        },

        {
            id:2,
            title:'pepa',
            description:'mon meilleur !',
            imageUrl:'https://unsplash.com/fr/photos/pElSkGRA2NU.jpg',
            createdDate: new Date(),
            snaps :38,
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;  
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }
    
    snapFaceSnapById(faceSnapId: number, snapType:'snap' |'unsnap' ): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
} 