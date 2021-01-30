import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import {LoginModule} from './components/login/login.module';
import {RegisterModule} from './components/register/register.module';
import {PrincipalModule} from './components/principal/principal.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
