import { Component, Input, OnChanges } from '@angular/core';
import { fadeInUp } from './../../../../shared/animations/fadeInUp';

@Component({
  selector: 'need-poetry',
  templateUrl: './need-poetry.component.html',
  styleUrls: ['./need-poetry.component.scss'],
  animations: [
    fadeInUp
 ]
})

export class NeedSzComponent implements OnChanges {

  @Input() public whitchSatrt : any ;

  private startAnimationTit : boolean = false;
  private startAnimationDet : boolean = false;
  

  ngOnChanges(){
    // console.log("whitchSatrt",this.whitchSatrt);
    if(this.whitchSatrt === 1){
      this.startAnimationTit = true;
      setTimeout(()=>{
        this.startAnimationDet = true;
      },100)
    }else{
      // this.startAnimationTit =  this.startAnimationDet = false;
    }

  }

}
