/**
 * 下面的切换轮播图小点
 */ 
import { Component, OnInit, OnChanges, ElementRef, ViewChild, Renderer2, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'change-dot',
  templateUrl: './change-dot.component.html',
  styleUrls: ['./change-dot.component.scss']
})
export class ChangeDotComponent implements OnInit, OnChanges {


  @ViewChild('firDot')  firDot: ElementRef;
  @ViewChild('secDot')  secDot: ElementRef;
  @ViewChild('thiDot')  thiDot: ElementRef;
  @ViewChild('fouDot')  fouDot: ElementRef;

  @Input() public currentIndex: number;
  @Output() sendIndex: EventEmitter<any> = new EventEmitter();
  
  changBg(temp){
    this.changeDotStyle(temp);
    this.sendIndex.emit(temp);
  }

  changeDotStyle(temp){
    let domArray = [this.firDot, this.secDot, this.thiDot, this.fouDot];
    domArray.forEach((item, index) => {
      if(temp === index) {
         this.renderer2.addClass(item.nativeElement, "active-dot");
      }else{
        this.renderer2.removeClass(item.nativeElement, "active-dot");
      }
    });
  }

  ngOnChanges(){
    this.changeDotStyle(this.currentIndex);
  }

  constructor(private renderer2: Renderer2 ) { }

  ngOnInit() {
  }

}
