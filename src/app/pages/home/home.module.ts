import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SlideshowComponent } from './home-content/slideshow/slideshow.component';
import { ChangeDotComponent } from './home-content/slideshow/change-dot/change-dot.component';
import { NeedPoetryComponent } from './home-content/need-poetry/need-poetry.component';
import { presentationUsComponent } from './home-content/presentation-us/presentation-us.component';
import { ReasonsComponent } from './home-content/presentation-us/reasons/reasons.component';
import { OurSkillsComponent } from './home-content/presentation-us/our-skills/our-skills.component';
import { HeSaidComponent } from './home-content/presentation-us/he-said/he-said.component';
import { PoetryNewsComponent } from './home-content/poetry-news/poetry-news.component';
import { MoveImgComponent } from './home-content/poetry-news/move-img/move-img.component';

const HOME_COMPOENTS = [
  HomeComponent,
  HomeContentComponent,

  SlideshowComponent,
  ChangeDotComponent,

  NeedPoetryComponent,

  presentationUsComponent,
  ReasonsComponent,
  OurSkillsComponent,
  HeSaidComponent,

  PoetryNewsComponent,
  MoveImgComponent
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
