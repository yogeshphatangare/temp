import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  setting: any;

  onLayoutChange = new Subject<any>();

  constructor() {
    this.setting = {
      sidenav: 'hide',
      toolbar: 'hide'
    };

    this.onLayoutChange = new BehaviorSubject(this.setting);
    this.updateLayout(this.setting);
  }

  updateLayout(model): void {
    this.setting = model;
    this.onLayoutChange.next(this.setting);
  }
}
