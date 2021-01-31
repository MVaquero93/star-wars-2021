import * as fromShipActions from '../actions/ship.actions';
import {ApiShipResult} from '../../models/ship';

export interface ShipState {
  data: ApiShipResult
  loaded: boolean
  loading: boolean
  error: string
}

export const initialState: ShipState = {
  data: {} as ApiShipResult,
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state = initialState, action: fromShipActions.ShipActions) {
  switch(action.type){
    case fromShipActions.LOAD_SHIPS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromShipActions.LOAD_SHIPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      }
    }
    case fromShipActions.LOAD_MORE_SHIPS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromShipActions.LOAD_MORE_SHIPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        ...action.payload
      }
    }
    case fromShipActions.LOAD_SHIPS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const getShips = (state: ShipState) => state.data;
export const getShipsLoaded = (state: ShipState) => state.loaded;
export const getShipsLoading = (state: ShipState) => state.loading;
export const getShipsError = (state: ShipState) => state.error;
