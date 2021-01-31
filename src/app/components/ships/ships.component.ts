import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {ApiShipResult} from '../../models/ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: ApiShipResult[];
  public page = 1
  // public ships: ApiShipResult[];

  constructor(private store: Store<fromStore.AppState>,
              private shipsService: ShipsService) {
    store.select('ships').subscribe( resp => {
      this.dataList = resp.data
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadShips())
    // this.loadShips()
  }

  // loadShips() {
  //
  //   this.shipsService.getShips(this.page).subscribe((ships) => {
  //     if(this.page > 1) {
  //       this.ships = this.dataList.results.concat(ships.results)
  //     } else {
  //       this.ships = ships
  //     }
  //     console.log('SHIPS -->', this.dataList)
  //     if(ships.next) {
  //       this.page = this.page + 1
  //       this.loadShips()
  //     }
  //   })
  // }
}
