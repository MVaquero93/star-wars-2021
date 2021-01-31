import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as fromShipActions from '../actions/ship.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ShipsService} from '../../services/ships.service';

@Injectable()
export class ShipEffects {

  constructor(private actions$: Actions,
              private shipsService: ShipsService) {}

  loadShips$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
    ofType(fromShipActions.LOAD_SHIPS),
    switchMap(() => this.shipsService.getShips(1)
      .pipe(
        map(response => {
          return new fromShipActions.LoadShipsSuccess(response);
        }),
        catchError(error => of(new fromShipActions.LoadShipsFail(error)))
      )
    )));

}
