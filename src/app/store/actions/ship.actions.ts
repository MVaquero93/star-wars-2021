import { Action } from '@ngrx/store';
import {ApiShipResult} from '../../models/ship';

export const LOAD_SHIPS = '[Ship] Load ships';
export const LOAD_SHIPS_SUCCESS = '[SHIP] Load ships success'
export const LOAD_SHIPS_FAIL = '[SHIP] Load ships fail'
export const LOAD_MORE_SHIPS = '[SHIP] Load more ships'
export const LOAD_MORE_SHIPS_SUCCESS = '[SHIP] Load more ships success'

export class LoadShips implements Action {
  readonly type = LOAD_SHIPS;

  constructor(public page: number){}
}

export class LoadMoreShips implements Action {
  readonly type = LOAD_MORE_SHIPS;

  constructor(public payload: ApiShipResult, public page: number){}
}

export class LoadMoreShipsSuccess implements Action {
  readonly type = LOAD_MORE_SHIPS_SUCCESS;

  constructor(public payload: ApiShipResult){}
}

export class LoadShipsSuccess implements Action {
  readonly type = LOAD_SHIPS_SUCCESS;

  constructor(public payload: ApiShipResult){}
}

export class LoadShipsFail implements Action {
  readonly type = LOAD_SHIPS_FAIL;

  constructor(public payload: any){}
}

export type ShipActions =
  LoadShips        |
  LoadShipsSuccess |
  LoadShipsFail    |
  LoadMoreShips    |
  LoadMoreShipsSuccess;
