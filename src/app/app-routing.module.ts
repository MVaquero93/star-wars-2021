import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./components/login/login.module`).then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import(`./components/register/register.module`).then(m => m.RegisterModule) },
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(m => m.PrincipalModule) }
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
