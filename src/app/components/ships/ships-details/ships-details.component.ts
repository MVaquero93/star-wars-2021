import { Component, OnInit, Input } from '@angular/core';
import {Ship} from "../../../models/ship";
import {Store} from "@ngrx/store";
import * as fromStore from '../../../store';
import {ShipsService} from '../../../services/ships.service';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  ships: Ship[]

  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(private store: Store<fromStore.AppState>,
              private shipsService: ShipsService) {
    // store.select('ships').subscribe( resp => {
    //   this.ships = resp.data
    //   console.log(this.ships)
    // })
  }

  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getStarshipId(url) {
    const urlSegments = url.split('/')
    this.shipId = urlSegments[urlSegments.length - 2]
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
