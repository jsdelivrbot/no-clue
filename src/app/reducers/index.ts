import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';


import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import * as fromLayout from './layout';
import * as fromRiddles from './riddles';


export interface State {
  layout: fromLayout.State;
  riddles: fromRiddles.State;
}

const reducers = {
  layout: fromLayout.reducer,
  riddles: fromRiddles.reducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
      return productionReducer(state, action);
}

/**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);


// Riddles Reducers
export const getRiddlesState = (state: State) => state.riddles;
export const getMosaicRiddles = createSelector(getRiddlesState, fromRiddles.getMosaicRiddles);
