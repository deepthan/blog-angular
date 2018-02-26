
import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

export const PagesRouting: Routes = [
  {
    path: '',
    component: PagesComponent, // 它有个侧边栏，可以选择home、routes等
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', // home模块，点击可以进入看此里面的效果
        loadChildren: 'app/pages/home/home.module#HomeModule'
      },
      {
        path: 'routes', // routes模块，包含懒加载、预加载、路由守卫、离开提示、阻止懒加载、阻止预加载
        loadChildren: 'app/pages/routes/routes.module#RoutesModule',
      }
    ]
  }
]
