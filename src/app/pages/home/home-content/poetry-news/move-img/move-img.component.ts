import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2  } from '@angular/core';

@Component({
  selector: 'poetry-move-img',
  templateUrl: './move-img.component.html',
  styleUrls: ['./move-img.component.scss']
})
export class MoveImgComponent implements OnInit {
  
  @Input() public newItem: any ;
  @ViewChild('itemWrap')  itemWrap: ElementRef;
  @ViewChild('content')  content: ElementRef;

  private mousePos = {
    top: "top: -100%; left: 0",
    right: "top: 0; left: 100%",
    bottom: "top: 100%; left: 0",
    left: "top: 0; left: -100%"
};

  mouseenter(e){
    let direction = this.getDirection(e);
    // console.log("进来的方向",direction,"初始化的样式",this.mousePos[direction])

    this.renderer2.removeClass(this.content.nativeElement, "active");
    this.renderer2.setAttribute(this.content.nativeElement, "style",this.mousePos[direction]);
    setTimeout(()=>{
      this.renderer2.addClass(this.content.nativeElement, "active");
      this.renderer2.setAttribute(this.content.nativeElement,  "style","left: 0;top: 0" );
    },1)
  }

  mouseleave(e){
    let direction = this.getDirection(e);
    // console.log("离开的方向",direction,"进行的样式",this.mousePos[direction])
    this.renderer2.setAttribute(this.content.nativeElement, "style",this.mousePos[direction]);
  }

  getDirection(e){
    let dire = ['top', 'right', 'bottom', 'left'];
    // console.log("获得的数字",this.moveInWay(e))
    return  dire[this.moveInWay(e)]
  }

  /**
  * @todo  判断移入方式 
  * @param 事件属性
  * @returns number 0-3 上右下左
  */
  moveInWay(e){
    let  item  =  this.itemWrap.nativeElement; // 获得dom节点 
    // var w = item.offsetWidth;  // 获得节点的宽
    // var h = item.offsetWidth;  // 获得节点的高 因为无margin所以可以用
    var b = item.getBoundingClientRect();  // 获得元素的大小及其相对于视口的位置
    var w = b.width;  
    var h = b.height;  
    var t =  document.body.scrollTop; // 获得卷曲值
    // console.log("节点的宽",w,"节点的高",h,"相对视口的位置",b,"卷曲值",t)
    var  x = (e.pageX - b.left  - (w / 2)) * (w > h ? (h / w) : 1);
    var  y = (e.pageY - b.top - t - (h / 2)) * (h > w ? (w / h) : 1);
    return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
  }

 

  constructor(  private renderer2 : Renderer2 ) { }

  ngOnInit() { 
    // this.renderer2.setStyle(this.itemWrap.nativeElement,"background","url("+ this.newItem.img +")");
    this.renderer2.setStyle(this.itemWrap.nativeElement,"background","#0061ae");
    
  }

}
