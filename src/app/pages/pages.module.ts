import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PagesRouting } from './pages.routing';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild( PagesRouting )
  ],
  declarations: [
    PagesComponent
  ]
})

export class PagesModule { }