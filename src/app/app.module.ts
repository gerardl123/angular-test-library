import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularGdlModule } from 'angular-gdl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularGdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
