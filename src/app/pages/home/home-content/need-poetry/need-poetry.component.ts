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

export class NeedPoetryComponent implements OnChanges {

  @Input() public whitchSatrt : any ;

  startAnimationTit : boolean = false;
  startAnimationDet : boolean = false;

  ngOnChanges(){
    if(this.whitchSatrt === 1){
      this.startAnimationTit = true;
      setTimeout(()=>{
        this.startAnimationDet = true;
      },100)
    }
  }

}
