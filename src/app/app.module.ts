import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { StepsComponent } from './page-header/steps/steps.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { PartiesComponent } from './parties/parties.component';
import { TransportationComponent } from './transportation/transportation.component';
import { CommodityComponent } from './commodity/commodity.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AesService} from '../app/services/aes.service'

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    StepsComponent,
    ShipmentComponent,
    PartiesComponent,
    TransportationComponent,
    CommodityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [AesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
