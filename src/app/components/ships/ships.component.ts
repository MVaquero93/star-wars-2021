import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  public page = 1

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.loadShips()
  }

  loadShips() {

    this.shipsService.getShips(this.page).subscribe((ships) => {
      if(this.page > 1) {
        this.dataList.results = this.dataList.results.concat(ships.results)
      } else {
        this.dataList = ships
      }
      console.log('SHIPS -->', this.dataList)
      if(ships.next) {
        this.page = this.page + 1
        this.loadShips()
      }
    })
  }
}
