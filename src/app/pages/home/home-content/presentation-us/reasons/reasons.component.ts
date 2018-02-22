import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poetry-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements  OnInit, OnChanges {

  @Output() sendVal: EventEmitter<any> = new EventEmitter();
  @Input()  public  formParentShowDet : any;
  @Input()  public  reasons : any;

  private showDet : boolean = false;

  clickTit(){
    this.showDet = true;
    this.sendVal.emit(this);
  }

  ngOnChanges(){
    this.formParentShowDet === this ? null : this.showDet = false;
  }

  constructor() { }
  
    ngOnInit() {
      this.reasons.default ?   this.showDet = true : null;
    }

}
