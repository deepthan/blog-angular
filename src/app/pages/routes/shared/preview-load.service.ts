import { Observable } from 'rxjs/Rx';
import { PreloadingStrategy, Route } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

export function requestIdle(zone: NgZone) {
  const win: any = window;
  if (win.requestIdleCallback) {
    return (fn) => win.requestIdleCallback(fn);
  }
  return (fn) => zone.runOutsideAngular(() => win.setTimeout(fn, 10));
}

@Injectable()
export class PreloadService implements PreloadingStrategy {

  constructor(
    private zone: NgZone
  ) { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    requestIdle(this.zone)(fn);
    return Observable.of(null);
  }

}
