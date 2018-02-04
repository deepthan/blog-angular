import { style } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  /**
   * 步骤：
   * 1. 确定是查看下一张图片 add() 还是上一张 reduce()
   * 2. 设置下一张图片的 frontIndex 或上一张的 nextIndex, setFrontOrNextIndex()
   * 3. 设置背景图 changeBg()
   */ 

  @ViewChild('firSlider')  firSlider: ElementRef;
  @ViewChild('secSlider')  secSlider: ElementRef;
  @ViewChild('thiSlider')  thiSlider: ElementRef;
  @ViewChild('fouSlider')  fouSlider: ElementRef;
  
  private index : number = 0;
  private frontIndex : number;
  private nextIndex : number;

  add(){
    this.setFrontOrNextIndex(true);
    this.index >= 3 ?  this.index = -1 : null 
    this.index +=  1;
    this.changeBg(true);
  }

  reduce(){
    this.setFrontOrNextIndex(false);
    this.index <= 0 ?  this.index = 4 : null 
    this.index -=  1;
    this.changeBg(false);
  }

  /**
   * @param flag boolean 切换图片
   */ 
  changeBg(flag:boolean){
    this.renderer2.removeClass(this.firSlider.nativeElement, "default-left");
    this.upDateInterval();
    let allSlider = [ this.firSlider, this.secSlider, this.thiSlider, this.fouSlider ];
    allSlider.forEach((item, index) => {
      this.resetClass(item);
      this.index == index ? flag ? this.renderer2.addClass(item.nativeElement, "next-in")
                                 : this.renderer2.addClass(item.nativeElement, "front-in")
                          : null;
    })

    flag ? this.renderer2.addClass(allSlider[this.frontIndex].nativeElement, "next-leave") 
         : this.renderer2.addClass(allSlider[this.nextIndex].nativeElement, "front-leave");
    this.innerAnimat(flag);
  }

  /**
   * 
   * @param val  要切换到的index ,是子组件切换轮播图的按钮传过来的数据
   */ 
  getIndex(val){
    let flag : boolean;
    if(this.index === val){
      return;
    }else if( this.index > val ){
      this.setFrontOrNextIndex(false);
      flag = false;
    }else{
      this.setFrontOrNextIndex(true);
      flag = true;
    } 
    this.index = val;
    this.changeBg(flag);
  }

  /**
   * 定时自动切换
   */ 
  private autoTimer;

  setAutoChange(){
    this.autoTimer = setInterval(()=>{
      this.add();
    }, 4000);
  }

  clearAutoChange(){
    clearInterval(this.autoTimer);
  }

  upDateInterval(){
    this.clearAutoChange();
    this.setAutoChange();
  }

  setFrontOrNextIndex(flag){
    flag ? this.frontIndex = this.index : this.nextIndex = this.index;
  }

  /**
   * 
   * @param item element 要去除样式的元素
   */ 
  resetClass(item){
    let classArr = ["next-in", "next-leave", "front-in", "front-leave"];
    classArr.forEach(classItem =>{
      this.renderer2.removeClass(item.nativeElement, classItem);
    })
  }

  /**
   * 轮播图里面的动画
   */ 

  @ViewChild('firTit')  firTit: ElementRef;
  @ViewChild('firDet')  firDet: ElementRef;
  @ViewChild('firBtn')  firBtn: ElementRef;

  @ViewChild('secTit')  secTit: ElementRef;
  @ViewChild('secDet')  secDet: ElementRef;
  @ViewChild('secBtn')  secBtn: ElementRef;

  @ViewChild('thiTit')  thiTit: ElementRef;
  @ViewChild('thiDet')  thiDet: ElementRef;
  @ViewChild('thiBtn')  thiBtn: ElementRef;

  @ViewChild('fouTit')  fouTit: ElementRef;
  @ViewChild('fouDet')  fouDet: ElementRef;
  @ViewChild('fouBtn')  fouBtn: ElementRef;

  private animateArr = [
    "a-bounceinB", "a-fadeinT",
    "a-flipinX", "a-rotateinLB",
    "a-bounceinL", "a-fadeinL",
    "a-fadeinL", "a-fadeinL",
    "a-fadeinT", "a-fadeinL"
  ];
  private newAnimate : string;
  private oldAnimate : string;
  private pageTimer = {} 
  
  innerAnimat(flag){
      this.oldAnimate = this.newAnimate;
      this.newAnimate = this.animateArr[this.rd()];
      for(let item in this.pageTimer){
        clearTimeout(this.pageTimer[item]);
      }
      this.cleanOrAddClass(this.index, true);
      if(flag === 'default'){ return }
      if(flag){
        this.cleanOrAddClass(this.frontIndex, false);
      }else{
        this.cleanOrAddClass(this.nextIndex, false);
      }
  }

  cleanOrAddClass(arrIndex, flag){
    let domArr = [
      [this.firTit,this.firDet,this.firBtn],
      [this.secTit,this.secDet,this.secBtn],
      [this.thiTit,this.thiDet,this.thiBtn],
      [this.fouTit,this.fouDet,this.fouBtn],
    ]
    domArr[arrIndex].forEach( (item, index) =>{
      if(flag){
        // index === 0 ?   this.addAnimate(item)
        //             :   index === 1 ? setTimeout(()=>{ this.addAnimate(item) },550)
        //                             : setTimeout(()=>{ this.addAnimate(item) },900)
        switch(index){
          case 0 : this.addAnimate(item); break;
          case 1 : this.pageTimer["timer1"] = setTimeout(()=>{this.addAnimate(item)}, 550); break;
          case 2 : this.pageTimer["timer2"] = setTimeout(()=>{this.addAnimate(item)}, 900); break;
          default:  break;
        }
      }else{
        this.removeAnimate(item)
      }
    })
  }

  addAnimate (ele) {
    this.renderer2.addClass(ele.nativeElement, this.newAnimate);
  }

  removeAnimate(ele){
    this.renderer2.removeClass(ele.nativeElement, this.oldAnimate);
  }

  rd(){
    return Math.floor(Math.random()*10);
  }

  goDown(){
    let ele =  document.documentElement ||  document.body;
    let willScrTop = ele.offsetHeight - 58;
    let offY = window.pageYOffset;
    var timmer = requestAnimationFrame(function fn(){
      offY = offY + 50;
      if(willScrTop> offY){
          window.scrollTo(0,offY);
          setTimeout(()=>{
            timmer=requestAnimationFrame(fn)
          },1)
      }else{
        window.scrollTo(0,willScrTop);
      }
    })
  }

  ngOnInit() {
    this.innerAnimat("default");
    this.setAutoChange();
  }

  constructor( private renderer2 : Renderer2) { }


}
