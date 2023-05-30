import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap} from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-signle-face-snap',
  templateUrl: './signle-face-snap.component.html',
  styleUrls: ['./signle-face-snap.component.scss']
})
export class SignleFaceSnapComponent {
  @Input () faceSnap! : FaceSnap; 
  buttonText!: string;

  constructor( private FaceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.buttonText= 'Oh Snap!';
  }
  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.FaceSnapsService.snapFaceSnapById (this.faceSnap.id,'snap');
      this.buttonText='Oops, unSnap';
    }else{
      this.FaceSnapsService.snapFaceSnapById (this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
