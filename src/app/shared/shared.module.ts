import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, XHRBackend, RequestOptions, HttpModule, JsonpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeaderComponent, FooterComponent, NgContentComponent } from './components/index';
import { WindowRefService } from './service/return-window.service';

const SHARED_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NgContentComponent
]

const SHARED_SERVICE = [
  WindowRefService
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    NgZorroAntdModule
  ],
  declarations: [ // 先声明
     ...SHARED_COMPONENTS
  ],
 
  providers: [
    ...SHARED_SERVICE
  ],
  exports: [ 
    ...SHARED_COMPONENTS,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}