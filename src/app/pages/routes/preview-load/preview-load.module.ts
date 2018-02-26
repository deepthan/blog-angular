import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PreviewLoadComponent } from './preview-load.component';
import { PreviewLoadRouting } from './preview-load.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PreviewLoadRouting)
  ],
  declarations: [
    PreviewLoadComponent
  ]
 
})
export class PreviewLoadModule { }



/**
 * 
 * 预加载模块检测方法：
 * 
 * 1. 把 ../routes,routing.ts文件中 34 行false改成true
 * 2. 谷歌浏览器 network点击js，先清空
 * 3. 进入其他的路由
 * 4. 查看加载了哪些文件以及加载时间和顺序
 * 
 * 
 */ 