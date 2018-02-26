/**
 * 路由配置，显示内容
 */ 
import { Routes } from '@angular/router';

import { LazyLoadComponent } from './lazy-load.component';

export const LazyLoadRouting: Routes = [
  {  
    path: '',
    component: LazyLoadComponent
  },
  {  
    path: '**',
    component: LazyLoadComponent
  }
];


