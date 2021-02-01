import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {ApiShipResult} from '../../models/ship';
import {loadState, saveState} from "../../helpers/store-cache";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: ApiShipResult;
  public page = 1

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.loadShips()
  }

  loadShips() {
    if(!loadState() || !loadState().loaded) {
      this.store.dispatch(new fromStore.LoadShips(this.page))
    }
    this.store.select(fromStore.getShips).pipe(
      tap(() => this.store.select(fromStore.getShipsState).subscribe((state) => saveState(state)))
    ).subscribe((ships) => {
      this.dataList = ships
      console.log('SHIPS -->', this.dataList)
    })
  }
}
