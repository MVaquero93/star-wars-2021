import * as fromShipReducer from './ship.reducer'

export interface AppState {
  ships: fromShipReducer.ShipState
}

export const reducers = {
  ships: fromShipReducer.reducer
}
