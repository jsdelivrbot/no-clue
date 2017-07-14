import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { GetRiddlesService } from '../services/get-riddles.service';
import * as riddlesActions from '../actions/riddles';

@Injectable()
export class RiddlesEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(riddlesActions.LOAD)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(riddlesActions.LOAD).skip(1);

      return this.riddlesService.getAllRiddles()
        .takeUntil(nextSearch$)
        .map(riddles => new riddlesActions.LoadSuccessAction(riddles))
        .catch(() => of(new riddlesActions.LoadFailAction([])));
    });

    constructor(private actions$: Actions, private riddlesService: GetRiddlesService) { }
}
