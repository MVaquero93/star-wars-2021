import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import {PrincipalModule} from './components/principal/principal.module';
import {AuthModule} from './pages/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
