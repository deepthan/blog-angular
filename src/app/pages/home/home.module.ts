import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SlideshowComponent } from './home-content/slideshow/slideshow.component';
import { ChangeDotComponent } from './home-content/slideshow/change-dot/change-dot.component';
import { NeedSzComponent } from './home-content/need-poetry/need-poetry.component';


const HOME_COMPOENTS = [
  HomeComponent,
  HomeContentComponent,

  SlideshowComponent,
  ChangeDotComponent,

  NeedSzComponent,

]

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    ...HOME_COMPOENTS
]
})
export class HomeModule { }
