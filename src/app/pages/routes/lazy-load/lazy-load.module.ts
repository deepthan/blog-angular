import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyLoadRouting } from './lazy-load.routing';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LazyLoadRouting) // 引入路由
  ],
  declarations: [
    LazyLoadComponent 
  ]

})

export class LazyLoadModule { }


/**
 * 
 * 懒加载模块检测方法：
 * 
 * 1. 进入其他的路由
 * 2. 谷歌浏览器 network点击js，先清空
 * 3. 再进入此模块的路由，查看加载了哪个文件
 * 
 * 
 */ 