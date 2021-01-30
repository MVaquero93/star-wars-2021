import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';

// Components
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import {PrincipalComponent} from './principal.component';
import {ShipsModule} from '../ships/ships.module';

@NgModule({
  declarations: [
    PrincipalComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    ShipsModule
  ]
})
export class PrincipalModule { }
