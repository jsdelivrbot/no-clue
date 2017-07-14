import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NoClueReducer from '../../reducers';
import * as layout from '../../actions/layout';

@Component({
  selector: 'clue-app',
  template: `
  <div class="app">
   <clue-header></clue-header>
   <clue-navbar></clue-navbar>
   <div class="main">
   <router-outlet ></router-outlet>
   </div>
   <clue-footer></clue-footer>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSideNavOpen$: Observable<boolean>;


  constructor(private store: Store<NoClueReducer.State>) {
    this.isSideNavOpen$ = store.select(NoClueReducer.getShowSidenav);
  }

  public onToggle() {
    this.store.dispatch(new layout.ToggleSidenavAction);
  }
}
