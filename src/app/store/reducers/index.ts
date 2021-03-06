import * as fromShipReducer from './ship.reducer'
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface AppState {
  ships: fromShipReducer.ShipState
}

export const reducers = {
  ships: fromShipReducer.reducer
};


export const getShipsState = createFeatureSelector<fromShipReducer.ShipState>('ships')
export const getShips = createSelector(getShipsState, fromShipReducer.getShips);
export const areShipsLoaded = createSelector(getShipsState, fromShipReducer.getShipsLoaded)
