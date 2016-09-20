/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Auth }     from './services/auth.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  moduleId: module.id,
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: './app.component.html',
  providers: [Auth]
})
export class App {

  constructor(private auth: Auth, public appState: AppState) {
    //console.log(auth.authenticated());
  }

  ngOnInit() {

  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
