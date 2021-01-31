import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as fromShipActions from '../actions/ship.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ShipsService} from '../../services/ships.service';
import {ShipState} from '../reducers/ship.reducer';

@Injectable()
export class ShipEffects {

  constructor(private actions$: Actions,
              private shipsService: ShipsService) {}

  @Effect()
  loadShips$: Observable<Action> =
    this.actions$.pipe(
    ofType<any>(fromShipActions.LOAD_SHIPS),
    switchMap((action) => this.shipsService.getShips(action.page)
      .pipe(
        map(response => {
            if(response.next) {
              return new fromShipActions.LoadMoreShips(response, action.page + 1 )
            }
            return new fromShipActions.LoadShipsSuccess(response);
        }),
        catchError(error => of(new fromShipActions.LoadShipsFail(error)))
      )
    ));

  @Effect()
  loadMoreShips$: Observable<Action> =
    this.actions$.pipe(
      ofType<any>(fromShipActions.LOAD_MORE_SHIPS),
      switchMap((action) => this.shipsService.getShips(action.page)
        .pipe(
          map(response => {
            if(response.next) {
              return new fromShipActions.LoadMoreShips(response, action.page + 1)
            }
            return new fromShipActions.LoadMoreShipsSuccess(response);
          }),
          catchError(error => of(new fromShipActions.LoadShipsFail(error)))
        )
      ));

}
