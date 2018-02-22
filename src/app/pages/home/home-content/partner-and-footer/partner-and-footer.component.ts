import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'poetry-partner-and-footer',
  templateUrl: './partner-and-footer.component.html',
  styleUrls: ['./partner-and-footer.component.scss']
})
export class PartnerAndFooterComponent implements OnInit, OnChanges {

  @Input() public whitchSatrt: any;

  private partnerStart : boolean =  false;
  ngOnChanges(){
    if(this.whitchSatrt === 4){
      this.partnerStart = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
