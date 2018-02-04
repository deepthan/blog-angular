/**
 * 文件名称：首页
 * 编写人：何林昆
 * 编写日期：2017.5.2
 * 变更人：
 * 变更内容：
 **/

import { Component, OnInit, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { WindowRefService } from './../../../shared/service/return-window.service';

@Component({
  selector: 'home-content',
  styleUrls: [
    './home-content.component.scss'
  ],
  templateUrl: './home-content.component.html',
})

export class HomeContentComponent implements OnInit {

  private documentH = document.documentElement.offsetHeight || document.body.offsetHeight; // 屏幕高度

  /**
   * 往下滚动的时候 
   * 1. 正好在节点上 直接加上屏幕大小
   * 2. 本页面往下一点 屏幕大小 - 往下的一点
   * 3. 往下的卷曲值取余屏幕大小
   */
  goDown() {
    let defaultOffY = window.pageYOffset; //页面卷曲值
    // let willScrTop = ele.offsetHeight - 58 + Math.floor(defaultOffY/ele.offsetHeight)*ele.offsetHeight ; // 将要跳转到的位置
    let willScrTop = defaultOffY + this.documentH - 58 - defaultOffY % this.documentH;
    willScrTop === defaultOffY ? willScrTop = defaultOffY + this.documentH : null;
    let tempOffY = defaultOffY;
    var timmer = requestAnimationFrame(function fn() {
      tempOffY = tempOffY + 50;
      if (willScrTop > tempOffY) {
        window.scrollTo(0, tempOffY);
        setTimeout(() => {
          timmer = requestAnimationFrame(fn)
        }, 1)
      } else {
        window.scrollTo(0, willScrTop);
      }
    })
  }

  goUp() {
    let defaultOffY = window.pageYOffset; //页面卷曲值
    if (defaultOffY <= 0) {
      return;
    }
    let willScrTop = defaultOffY - 58 - defaultOffY % this.documentH;
    let tempOffY = defaultOffY;
    var timmer = requestAnimationFrame(function fn() {
      tempOffY = tempOffY - 50;
      if (willScrTop < tempOffY) {
        window.scrollTo(0, tempOffY);
        setTimeout(() => {
          timmer = requestAnimationFrame(fn)
        }, 1)
      } else {
        window.scrollTo(0, willScrTop);
      }
    })
  }

  private eventListener;

  addListener() {
    let that = this;
    this.eventListener = this._window.addEventListener("scroll", () => {
      that.startAnimations();
    });
  }

  private whitchSatrt: number;
  private readyAnimateArray = [];

  startAnimations() {
    let ratio = Math.ceil((window.pageYOffset - this.documentH / 5) / this.documentH);
    if (this.readyAnimateArray.indexOf(ratio) == -1) {
      this.readyAnimateArray.push(ratio);
    } else {
      return;
    }
    this.whitchSatrt = ratio;
  }

  ngOnDestroy() {
    this._window.removeEventListener("scroll", this.eventListener);
  }

  private _window: Window;

  constructor(private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  private documentW = document.documentElement.offsetWidth || document.body.offsetWidth; // 屏幕宽度
  
  ngOnInit() {
    console.log("this.documentW",this.documentW)
    if(this.documentW < 768){
      for(let item = 0; item<=5; item++){
        setTimeout(()=>{
          this.whitchSatrt = item;
        },1)
      }
    }else{
       this.addListener();
    }
  }


}

