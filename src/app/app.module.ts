import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitObservableComponent } from './init-observable/init-observable.component';
import { OperatorsObservableComponent } from './operators-observable/operators-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    InitObservableComponent,
    OperatorsObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
