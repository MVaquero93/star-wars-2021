import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import {ApiShipResult} from "../models/ship";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  $data: Observable<any>
  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor( private http: HttpClient ) {
    // this.$dat
  }

  getShips(page): Observable<any>{
    return this.http.get<ApiShipResult>(this.url + '?page=' + page)
  }
}
