/**
 * module Name: 路由相关模块
 * Description: 模块懒加载（延迟加载）、预加载、路由守卫、离开提示。
 * module URI: https://deepthan.gitee.io/angular-demo/#/routes/signin
 * Author: deepthan
 * Author URI: https://github.com/deepthan
*/
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '../../shared/shared.module';
import { RoutesRouting } from './routes.routing';
import { RoutesComponent } from './routes.component';
import { SigninComponent } from './signin/signin.component';
import  { CanSigninVisitProvide, PreloadService, AuthorizationService, CanAdminVisitProvide, CanLeaveProvide } from './shared/index'

const ROUTES_COMPONENT = [
  RoutesComponent,
  SigninComponent
]

const ROUTES_PROVIDERS = [
  PreloadService,
  AuthorizationService,
  CanSigninVisitProvide,
  CanAdminVisitProvide,
  CanLeaveProvide
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(RoutesRouting),
  ],
  declarations: [
    ...ROUTES_COMPONENT
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ]
 
})


export class RoutesModule { }


 //                                                                                                                                                              \\
/******************************************************************************************************************************************************************\
 *  
 *  此为路由模块，包括的功能：
 *  
 *     * 下面介绍的 service 或 provider 都放在 routes 目录下的 shared 文件夹下，且都在routes.module.ts里面注册。
 * 
 *  1. 模块懒加载
 *         原理：点击到哪个模块才加载哪个模块的js文件。 
 *         实现方法&位置： 
 *             routes/routes.routing.ts文件，第27~30行进行配置, 懒加载的测试模块：lazy-load 。
 *         
 *            
 *  2. 模块预加载：
 *         原理：只有配置了懒加载可以进行预加载，在加载了本模块文件并且页面渲染完全之后，再去自动加载指定的模块文件，好处是用户打开其他模块会非常快因为文件已经加载过了。
 *         实现方法&位置：
 *            1) 定义预加载 service ： shared/service/preview-load.ts , 抛出 PreloadService。
 *            2) 在app.module.ts里面注册此服务。因为RouterModule.forRoot()可传入路由、指令和服务参数，但RouterModule.forChild()却只接收路由、指令，不可传入服务。
 *            3) 服务注册好了，在路由里面直接用 ./routes.routing.ts的 34 行进行预加载设置,默认全局开始预加载，如若不想预加载则设置 preload : false 即可。
 * 
 * 
 *  3. 路由守卫：
 *         原理： 只有登录或相应权限的用户才可以访问某个url，否则会拦截。
 *         实现方法&位置：
 *            不登录不给访问uri
 *               [routerLink]="['/routes/guard/admin']" : 顶级路由开始写。
 *               0) 模拟登录并存用户信息，供后面验证用。 authorization.provider.ts
 *               1) 新建任何人、user、admin 可以访问的组件 
 *               2) 定义登录、admin访问限制文件 can-signin-visit.provider,ts 和 can-admin-visit.provider.ts文件。
 *               3) 在 guard 文件夹下的 guard.routing.ts文件 27-32行配置登录方可访问 和 34-38行admin方可访问的路由守卫。
 *               4）账号密码： 普通用户      账号： user     密码： 123   
 *                            admin               admin          123 
 *               5) 对应的情况： 
 *                   i. 未登录访问 user和admin提示权限不足，可以访问  /routes/guard/anybody 但无法访问 /routes/guard/user 和 /admin
 *                   ii. 登录user可以访问 /routes/guard/anybody 和 /user 但是无法访问 .admin
 *                   iii. 登录admin全都可以访问
 * 
 * 实现原理？
 *     源码解读（待续）。
 * 
 * 
 * 
 * 
 * 
 */ 