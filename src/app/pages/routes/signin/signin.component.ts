import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthorizationService } from '../shared/authorization.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    this.signin(this.validateForm.value)
  }

  roleInfo: any;

  signin(userInfo) {
    this.signCheck(userInfo);
    if (this.roleInfo.role) {
      this.authService.saveAccount(this.roleInfo);
      this.router.navigateByUrl('/routes/guard'); 
      this.createNotification('success', '恭喜', '登录成功');
    } else {
      this.createNotification('error', '登录失败', '用户名或密码错误！');
    }
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  signCheck(userInfo) {
    let userName = userInfo.userName;
    if (userName == 'admin') {
      this.setRoleInfo('admin');
    } else if (userName == 'user') {
      this.setRoleInfo('user');
    } else {
      this.setRoleInfo(false);
    }
  }

  setRoleInfo(role) {
    this.roleInfo = {
      role: role
    }
  }

  signout() {
    this.authService.removeAccount();
    this.createNotification('success', '成功', '已清除');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthorizationService,
    private _notification: NzNotificationService,
    private router: Router ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  
  }

  // private userName : string = '';
  // ngOnChanges(){
  //   this.userName = this.authService.getCurrentUser();
  //   console.log("userName",this.userName);
  // }

  createNotification = (type, tit, content) => {
    this._notification.create(type, tit, content);
  };


}
