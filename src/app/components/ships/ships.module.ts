import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShipsComponent} from './ships.component';
import {StoreModule} from '@ngrx/store';
import {ShipsDetailsComponent} from './ships-details/ships-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path: '', component: ShipsComponent},
];

@NgModule({
  declarations: [ ShipsComponent, ShipsDetailsComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule,
    NgxPaginationModule
  ]
})
export class ShipsModule { }
