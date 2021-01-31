import * as fromShipActions from '../actions/ship.actions';
import {ApiShipResult} from '../../models/ship';

export interface ShipState {
  data: ApiShipResult[]
  error: string
}

export const initialState: ShipState = {
  data: [],
  error: ''
}

export function reducer(state = initialState, action: fromShipActions.ShipActions) {
  switch(action.type){
    case fromShipActions.LOAD_SHIPS: {
      return {
        ...state,
      }
    }
    case fromShipActions.LOAD_SHIPS_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }

    case fromShipActions.LOAD_SHIPS_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}
