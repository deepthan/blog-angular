/**
 * 路由配置，显示内容
 */ 
import { Routes } from '@angular/router';

import { PreviewLoadComponent } from './preview-load.component';

export const PreviewLoadRouting: Routes = [
  {  
    path: '',
    component: PreviewLoadComponent
  },
  {  
    path: '**',
    component: PreviewLoadComponent
  }
];


