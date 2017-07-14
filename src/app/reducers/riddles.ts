import * as riddlesActions from '../actions/riddles';
import { Riddle } from '../models/riddle';

export interface State {
  mosaicRiddles: Riddle[];
}

const initialState: State = {
  mosaicRiddles: []
};

export function reducer(state = initialState, action: riddlesActions.Actions): State {
  switch (action.type) {
    case riddlesActions.LOAD_SUCCESS:
      return {
        mosaicRiddles: action.payload
      };

    default:
      return state;
  }
}

export const getMosaicRiddles = (state: State) => state.mosaicRiddles;
