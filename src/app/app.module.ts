import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Component1Component } from './mycomponents/component1/component1.component';
import { Component2Component } from './mycomponents/component2/component2.component';
import { Directive1Directive } from './mydirective/directive1.directive';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Directive1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
