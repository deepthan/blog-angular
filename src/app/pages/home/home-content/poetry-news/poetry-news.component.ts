
import { Component, OnInit, Input } from '@angular/core';
import { fadeInUp } from './../../../../shared/animations/fadeInUp';

@Component({
  selector: 'poetry-news',
  templateUrl: './poetry-news.component.html',
  styleUrls: ['./poetry-news.component.scss'],
  animations: [
    fadeInUp
 ]
})
export class PoetryNewsComponent implements OnInit {

  @Input() public whitchSatrt: any;

  startAnimationTit: boolean = false;
  startAnimationDet: boolean = false;

  ngOnChanges() {
    if (this.whitchSatrt === 3) {
      this.startAnimationTit = true;
      setTimeout(() => {
        this.startAnimationDet = true;
      }, 100)
    }
  }

  newsList = [
    {
      img: './assets/images/sliders/1.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/2.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/3.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/4.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/5.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/6.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    }
  ]

  ngOnInit(){}

  constructor() { }


}
