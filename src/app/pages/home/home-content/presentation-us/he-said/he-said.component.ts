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
      tit: 'CSA',
      det: '云安全联盟是中立的非盈利行业组织，致力于国际云计算安全的全面发展。云安全联盟是中立的非盈利行业组织，致力于国际云计算安全的全面发展。联盟的使命“倡导使用最佳实践为云计算提供安全保障，并为云计算的正确使用提供教育以帮助确保所有其他计算平台的安全。技术的发展。技术的发展。技术的发展。技术的发展。技术的发展。技术的发展。技术的发展。技术的发展。'
    },
    {
      img: '../../../../../../assets/images/home_icon_2.png',
      tit: 'OWASP',
      det: 'OWASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。我们的使命是使应用软件更加安全，使企业和组织能够对应用安全风险做出更清晰的决策。目前OWASP全球拥有140个分会、近四万名会员，共同推动了安全标准、安全确认工具、安全指导手册等应用安全技术的发展。技术的发展。'
    },
    {
      img: '../../../../../../assets/images/home_icon_3.png',
      tit: '非盈利的全球性安全组织',
      det: 'WASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。WASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。WASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。WASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。WASP是一个开源的、非盈利的全球性安全组织，致力于应用软件的安全研究。'
    },
    {
      img: '../../../../../../assets/images/home_icon_2.png',
      tit: '移动互联网安全技术国家工程实验室',
      det: '移动互联网安全技术国家移动互联网安全技术国家工程实验室移动互联网安全技术国家工程实验室工程实验室于2013年11月由国家发改委正式批复，由北京邮电大学、中国国移动、华为等单位共建。实验室针对移动互联网快速发展面临的网络和信息安全问题，围绕移动互联网在传输安全、溯源技术、控制技术、安全管理、加固和检测技术等方面的迫切需求进行攻关。技术的发展。'
    }
  ];

  
}
