/***
 * 此为路由介绍的模块，包括：
 * @param   懒加载
 * 
 * 
 * 
 * */ 
import { Routes } from '@angular/router';

import { RoutesComponent } from './routes.component';
import { SigninComponent } from './signin/signin.component';

export const RoutesRouting: Routes = [
  { 
    path: '',
    component: RoutesComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'lazyload',  // 懒加载模块用法
        loadChildren: './lazy-load/lazy-load.module#LazyLoadModule' // ！* 只需要在这里这样配置即可懒加载模块 * ！ 
      },
      {
        path: 'previewload',  // 预加载模块用法
        loadChildren: './preview-load/preview-load.module#PreviewLoadModule',
        data: { preload: false }  // true表示要启用预加载， false表示禁用预加载，这里禁用了可以改成true查看效果。
      },
      {
        path: 'guard', // 路由守卫模块
        loadChildren: './guard/guard.module#GuardModule'
      },
      {
        path: '**',
        redirectTo: 'signin'
      }
    ]
   }
];

