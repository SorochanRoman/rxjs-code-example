import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitObservableComponent } from './init-observable/init-observable.component';
import { OperatorsObservableComponent } from './operators-observable/operators-observable.component';
import { HooOperatorsObservableComponent } from './hoo-operators-observable/hoo-operators-observable.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { DragEventComponent } from './drag-event/drag-event.component';
import { ErrosOperatorsComponent } from './erros-operators/erros-operators.component';
import { LiveSearchExampleComponent } from './live-search-example/live-search-example.component';
import { CombineOperatorsComponent } from './combine-operators/combine-operators.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InitObservableComponent,
    OperatorsObservableComponent,
    HooOperatorsObservableComponent,
    SubjectsComponent,
    DragEventComponent,
    ErrosOperatorsComponent,
    LiveSearchExampleComponent,
    CombineOperatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
