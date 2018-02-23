import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { GuardRoutes } from './guard.routing';
import { GuardComponent } from './guard.component';
import { CanAdminVisitComponent } from './can-admin-visit/can-admin-visit.component';
import { CanUserVisitComponent } from './can-user-visit/can-user-visit.component';
import { CanAnybodyVisitComponent } from './can-anybody-visit/can-anybody-visit.component';
import { LeaveAuthorizationComponent } from './leave-authorization/leave-authorization.component';

const GUARD_COMPONENT = [
  GuardComponent,
  CanAdminVisitComponent,
  CanUserVisitComponent,
  CanAnybodyVisitComponent,
  LeaveAuthorizationComponent
]

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(GuardRoutes)
  ],
  declarations: [
    ...GUARD_COMPONENT,
]

})
export class GuardModule { }