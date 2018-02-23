import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'poetry-he-said',
  templateUrl: './he-said.component.html',
  styleUrls: ['./he-said.component.scss']
})
export class HeSaidComponent implements OnInit {

  private companyInfo : any;
  private index : number = 0;

  @ViewChild('headImg')  headImg: ElementRef;
  
  constructor(private renderer2 : Renderer2) { }
  
  ngOnInit() {
    this.changeCom(0);
    setInterval(()=>{ this.addDot() },4000);
  }

  changeCom(index){
    this.index = index;
    this.companyInfo = this.companyArray[index];
    this.renderer2.setStyle(this.headImg.nativeElement, 'background-image', 'url(' + this.companyInfo.img + ')'  );
    this.changeDot(index);
  }

  private firDot : boolean = false;
  private secDot : boolean = false;
  private thiDot : boolean = false;
  private fouDot : boolean = false;
  
  changeDot(index) {
    this.resetDot();
    switch(index){
      case 0 : this.firDot = true; break;
      case 1 : this.secDot = true; break;
      case 2 : this.thiDot = true; break;
      case 3 : this.fouDot = true; break;
    }
    // let dots = [this.firDot, this.secDot, this.thiDot, this.fouDot];
    // console.log("dots.",dots[index],this.firDot,this.secDot);
    // dots.forEach( (item, num) => {
    //   num === index ?  item = true : item = false;
    //   console.log("item",item, num)
    // })
    // console.log("this.",dots[index],this.firDot,this.secDot)
  }

  addDot(){
    if(this.index >= 3){
      this.index = 0;
      return;
    }else{
      this.index++;
    }
    this.changeCom(this.index);
  }

  resetDot(){
    this.firDot = false;
    this.secDot = false;
    this.thiDot = false;
    this.fouDot = false;
  }


  private companyArray = [
    {
      img: '../../../../../../assets/images/home_icon_1.png',
      tit: '诗名字',
      det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
    },
    {
      img: '../../../../../../assets/images/home_icon_2.png',
      tit: '诗名字',
      det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
    },
    {
      img: '../../../../../../assets/images/home_icon_3.png',
      tit: '诗名字',
      det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
    },
    {
      img: '../../../../../../assets/images/home_icon_2.png',
      tit: '诗名字',
      det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
    }
  ];

  
}
