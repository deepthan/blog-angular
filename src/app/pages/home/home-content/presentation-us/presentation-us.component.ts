import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'poetry-presentation-us',
  templateUrl: './presentation-us.component.html',
  styleUrls: ['./presentation-us.component.scss']
})
export class presentationUsComponent implements OnInit {
  
  @Input() public whitchSatrt: any;
  
  private showDet: boolean;
  /* 传递过来的是判断为 this ，指定被点击的组件，由此可判别是哪个组件的被点击了   */
  getVal(val) {
    this.showDet = val;
  }

  private skillsBarStart : boolean =  false;
  ngOnChanges(){
    if(this.whitchSatrt === 2){
      this.skillsBarStart = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  private whyChooseUs = [
    {
      title: "咨询服务及落地化解决方案提供商",
      detail: "咨询服务及落地化解决方案提供商咨询服务及落地化解决方案提供商咨询服务及落地化解决方案提供商咨询服务及落地化解决方案提供商咨询服务及落地化解决方案提供商",
      default: 'true'
    },
    {
      title: "我们的真的很厉害",
      detail: "我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害我们的真的很厉害"
    },
    {
      title: "我们团队很好我们团队很好我们团队很好",
      detail: "我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好我们团队很好"
    },
    {
      title: "我们服务特别优质我们服务特别优质",
      detail: "我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质我们服务特别优质"
    },
  ]

  private skillMetas = [
    {
      name: 'xss检出率',
      percentage: '40%',
      color: '#0061ea'
    },
    {
      name: 'iast检测出哪些东西很厉害',
      percentage: '80%',
      color: '#5D9CEC'
    },
    {
      name: 'xss检出率',
      percentage: '95%',
      color: '#FC6E52'
    },
    {
      name: 'iast检测出哪些东西很厉害',
      percentage: '99%',
      color: '#5D9CEC'
    },
    {
      name: 'xss检出率',
      percentage: '100%',
      color: '#AC92EC'
    },
    {
      name: 'iast检测出哪些东西很厉害',
      percentage: '50%',
      color: '#656D78'
    }

  ]
}
