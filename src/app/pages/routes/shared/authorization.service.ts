import { Injectable } from '@angular/core';

const sessionStroageKey = "currentUser";

@Injectable()
export class AuthorizationService {

    private _currentUser: any;

    private _role: string[];

    isLogin(role?): boolean {
        this.getCurrentUser();
        return role ?
            role === this._currentUser ? true : false
            :
            this._currentUser
    }

    hasRole(name): boolean {
        this.getCurrentUser();
        this._role = [this._currentUser];
        return this._role.includes(name);
    }

    getCurrentUser(): any {
        let currentUser = JSON.parse(sessionStorage.getItem(sessionStroageKey));
        return this._currentUser = currentUser ? currentUser.role : null;
    }

    saveAccount(meta: any): boolean {
        sessionStorage.setItem(sessionStroageKey, JSON.stringify(meta));
        return true;
    }

    removeAccount(): boolean {
        sessionStorage.removeItem(sessionStroageKey);
        return true;
    }   




}