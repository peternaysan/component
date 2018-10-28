import { Component, OnInit, Input } from '@angular/core';
import { AesService } from '../../app/services/aes.service';
import { MasterData } from '../../app/shared/master-data';
import { LookupService } from '../services/lookup.service';

@Component({
    selector: 'shipment-form',
    templateUrl: 'shipment.component.html',
    styleUrls: ['shipment.component.scss']
})

export class ShipmentComponent implements OnInit {
    @Input() shipmentHeader;
    public inboundList: any = [];
    public filingTypeList: any = [];
    public states: any = [];
    public header: any = {}

    constructor(private lookupService: LookupService) {
    }

    log(){
        console.log(this.shipmentHeader);
    }

    ngOnInit() {
        this.inboundList = MasterData.InbondCodeList;
        this.filingTypeList = MasterData.filingTypeList;
    }

    ngAfterViewInit() {
        var country = "United States";
        this.lookupService.states(country)
            .subscribe((data) => { this.states = data },
                (err) => { console.log(err); }
            );
    }
}