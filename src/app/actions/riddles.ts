import { Action } from '@ngrx/store';
import { Riddle } from '../models/riddle';

export const LOAD =                 '[Riddles] Load';
export const LOAD_SUCCESS =         '[Riddles] Load Success';
export const LOAD_FAIL =            '[Riddles] Load Fail';

export const LOAD_RIDDLE =                 '[Riddles] Load Riddle';
export const LOAD_RIDDLE_SUCCESS =         '[Riddles] Load Riddle Success';
export const LOAD_RIDDLE_FAIL =            '[Riddles] Load Riddle Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Riddle[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export class LoadRiddleAction implements Action {
  readonly type = LOAD_RIDDLE;

  constructor(public payload: number) {}
}

export class LoadRiddleSuccessAction implements Action {
  readonly type = LOAD_RIDDLE_SUCCESS;

  constructor(public payload: Riddle[]) { }
}

export class LoadRiddleFailAction implements Action {
  readonly type = LOAD_RIDDLE_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | LoadRiddleAction
  | LoadRiddleSuccessAction
  | LoadRiddleFailAction
  ;
