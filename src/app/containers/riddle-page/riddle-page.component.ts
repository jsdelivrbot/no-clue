import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as NoClueReducer from '../../reducers';
import * as riddlesActions from '../../actions/riddles';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'clue-riddle-page',
  template: `<clue-riddle-details></clue-riddle-details>`,
  styleUrls: ['./riddle-page.component.css']
})
export class RiddlePageComponent implements OnInit {

  constructor(private store: Store<NoClueReducer.State>) {
    //this.riddle$ = this.store.select(NoClueReducer.getCurrentRiddle);
    this.store.dispatch(new riddlesActions.LoadRiddleAction(1));
   }

  ngOnInit() {
  }

}
