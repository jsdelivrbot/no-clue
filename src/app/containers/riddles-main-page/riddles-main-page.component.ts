import { Observable } from 'rxjs/Rx';
import { GetRiddlesService } from '../../services/get-riddles.service';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { Riddle } from '../../models/riddle';
import { Store } from '@ngrx/store';
import * as NoClueReducer from '../../reducers';
import * as riddlesActions from '../../actions/riddles';


@Component({
  selector: 'clue-riddles-main-page',
  template: `
   <clue-riddles-mosaic [riddles]="riddles$ | async">
   </clue-riddles-mosaic>
  `,
  styleUrls: ['./riddles-main-page.component.css']
})
export class RiddlesMainPageComponent {

  public riddles$: Observable<Riddle[]>;

  constructor(private store: Store<NoClueReducer.State>) {
    this.riddles$ = this.store.select(NoClueReducer.getMosaicRiddles);
    this.store.dispatch(new riddlesActions.LoadAction);
   }
}
