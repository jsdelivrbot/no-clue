import { Action } from '@ngrx/store';

export const TOGGLE_SIDENAV =   '[Layout] Toggle Sidenav';


export class ToggleSidenavAction implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export type Actions
  = ToggleSidenavAction;
