import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {ApiShipResult} from '../../models/ship';

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
    this.store.dispatch(new fromStore.LoadShips(this.page))
    this.store.select(fromStore.getShips).subscribe((ships) => {
      this.dataList = ships
      console.log('SHIPS -->', this.dataList)
    })
  }
}
