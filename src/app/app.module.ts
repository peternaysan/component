import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { StepsComponent } from './page-header/steps/steps.component';
import { ShipmentComponent } from './shipment/shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    StepsComponent,
    ShipmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
