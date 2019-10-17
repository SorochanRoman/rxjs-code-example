import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitObservableComponent } from './init-observable/init-observable.component';
import { OperatorsObservableComponent } from './operators-observable/operators-observable.component';
import { HooOperatorsObservableComponent } from './hoo-operators-observable/hoo-operators-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    InitObservableComponent,
    OperatorsObservableComponent,
    HooOperatorsObservableComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
