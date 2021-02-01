import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {PrincipalModule} from './components/principal/principal.module';
import {AuthModule} from './components/auth/auth.module';

// Components
import { AppComponent } from './app.component'

// Store
import { StoreModule } from '@ngrx/store'
import {reducers, effects} from './store';
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PrincipalModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
