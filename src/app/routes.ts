import { ShipmentComponent } from "./shipment/shipment.component";
import { PartiesComponent } from "./parties/parties.component";
import { CommodityComponent } from "./commodity/commodity.component";
import { TransportationComponent } from "./transportation/transportation.component";

export const routes = [

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
    { path: '**', redirectTo: 'shipment', pathMatch: 'full' }

];
