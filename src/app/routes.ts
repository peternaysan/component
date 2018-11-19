import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes }   from '@angular/router';
import { ShipmentComponent } from "../app/shipment/shipment.component";
import { PartiesComponent } from "../app/parties/parties.component";
import { CommodityComponent } from "./commodity/commodity.component";
import { TransportationComponent } from "./transportation/transportation.component";

export const routes:Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,

    },
    {
        path: 'shipment',
        component: ShipmentComponent,

    },
    {
        path: 'parties',
        component: PartiesComponent,

    },
    {
        path: 'commodity',
        component: CommodityComponent,

    },
    {
        path: 'transportation',
        component: TransportationComponent,

    },
    { path: '', redirectTo: 'shipment', pathMatch: 'full' },
    // Not found
    // { path: '**', redirectTo: 'shipment', pathMatch: 'full' }

];
