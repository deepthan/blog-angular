import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { PreloadService } from './pages/routes/shared/preview-load.service';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    PagesModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(AppRouting, {useHash: true }) // 预加载 1  RouterModule 传入服务
  ],
  providers: [
    PreloadService  // 预加载 2 注册服务
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
