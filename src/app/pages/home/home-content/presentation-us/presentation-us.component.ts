import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'poetry-presentation-us',
  templateUrl: './presentation-us.component.html',
  styleUrls: ['./presentation-us.component.scss']
})
export class presentationUsComponent implements OnInit {
  
  @Input() public whitchSatrt: any;
  
  public showDet: boolean;
  /* 传递过来的是判断为 this ，指定被点击的组件，由此可判别是哪个组件的被点击了   */
  getVal(val) {
    this.showDet = val;
  }

  public skillsBarStart : boolean =  false;
  ngOnChanges(){
    if(this.whitchSatrt === 2){
      this.skillsBarStart = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  whyChooseUs = [
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      default: 'true'
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
  ]

  skillMetas = [
    {
      name: '唐诗',
      percentage: '40%',
      color: '#0061ea'
    },
    {
      name: '唐诗',
      percentage: '80%',
      color: '#5D9CEC'
    },
    {
      name: '唐诗',
      percentage: '95%',
      color: '#FC6E52'
    },
    {
      name: '唐诗',
      percentage: '99%',
      color: '#5D9CEC'
    },
    {
      name: '唐诗',
      percentage: '100%',
      color: '#AC92EC'
    },
    {
      name: '唐诗',
      percentage: '50%',
      color: '#656D78'
    }

  ]
}
