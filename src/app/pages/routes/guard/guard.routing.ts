import { CanLeaveProvide } from './../shared/can-leave.provider';
import { Routes, RouterModule } from '@angular/router';

import { CanSigninVisitProvide } from './../shared/can-signin-visit.provider';
import { CanAdminVisitProvide } from './../shared/can-admin-visit.provider';

import { GuardComponent } from './guard.component';
import { CanAdminVisitComponent } from './can-admin-visit/can-admin-visit.component';
import { CanUserVisitComponent } from './can-user-visit/can-user-visit.component';
import { CanAnybodyVisitComponent } from './can-anybody-visit/can-anybody-visit.component';
import { LeaveAuthorizationComponent } from './leave-authorization/leave-authorization.component';


export const GuardRoutes: Routes = [
  {  
    path: '',
    component: GuardComponent,
    children: [
      {
        path: '',
        redirectTo: 'anybody',
        pathMatch: 'full'
      },
      {
        path: 'anybody',
        component: CanAnybodyVisitComponent
       
      },
      {
        path: 'admin',
        component: CanAdminVisitComponent,
        canActivate: [ CanAdminVisitProvide ],
        canLoad: [ CanAdminVisitProvide ]
      },
      {
        path: 'user',
        component: CanUserVisitComponent,
        canActivate: [ CanSigninVisitProvide ],
        canLoad: [ CanSigninVisitProvide ]
      },
      {
        path: 'leave',
        component: LeaveAuthorizationComponent,
        canDeactivate: [ CanLeaveProvide]
      }
    ]
  }
  
];

