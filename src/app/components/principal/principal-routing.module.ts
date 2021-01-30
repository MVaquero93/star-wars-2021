import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,
  children: [
    { path: 'ships', loadChildren: () => import(`../../components/ships/ships.module`).then(m => m.ShipsModule)  },
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }
