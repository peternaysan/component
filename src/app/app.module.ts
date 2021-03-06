import { AesLoaderComponent } from './shared/aes-loader/aes-loader.component';
import { AesPrintViewComponent } from './print-view/print-view.component';
import { ErrorDetailComponent } from './error-detail/error-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { StepsComponent } from './page-header/steps/steps.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { PartiesComponent } from './parties/parties.component';
import { TransportationComponent } from './transportation/transportation.component';
import { CommodityComponent } from './commodity/commodity.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';

import { AesService } from '../app/services/aes.service';
import { LookupService } from '../app/services/lookup.service';
import { PrintViewEeiComponent } from './print-view/print-view-eei.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    StepsComponent,
    ShipmentComponent,
    PartiesComponent,
    TransportationComponent,
    CommodityComponent,
    AesPrintViewComponent,
    PrintViewEeiComponent,
    ErrorDetailComponent,
    AesLoaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModalModule,
    HttpClientModule,
    NgSelectModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AesService, LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
