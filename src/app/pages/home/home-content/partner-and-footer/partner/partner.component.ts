import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { fadeInUp } from './../../../../../shared/animations/fadeInUp';

@Component({
  selector: 'poetry-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  animations: [
    fadeInUp
 ]
})
export class PartnerComponent implements OnInit, OnChanges {

  @Input() public partnerStart: any;
  imgStart : boolean = false;

  ngOnChanges(){
    this.partnerStart ? this.beginImg() : null;
  }

  beginImg(){
    setTimeout(()=>{
      this.imgStart = true;
    },300)
  }

  constructor() { }

  ngOnInit() {
  }



}
