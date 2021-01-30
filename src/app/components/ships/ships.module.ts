import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShipsComponent} from './ships.component';
import {StoreModule} from '@ngrx/store';

const routes: Routes = [
  {path: '', component: ShipsComponent},
];

@NgModule({
  declarations: [ ShipsComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule
  ]
})
export class ShipsModule { }
