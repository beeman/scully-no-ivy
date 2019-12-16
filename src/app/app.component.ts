import {IdleMonitorService} from '@scullyio/ng-lib';
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor (private idle: IdleMonitorService) {
   this.idle.idle$
     .subscribe(res => {
       console.log(res);
     })
 }

  title = 'scully-no-ivy';
}
