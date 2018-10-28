import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../../app/services/aes.service';
import { MasterData } from '../../app/shared/master-data';
import { LookupService } from '../services/lookup.service';

@Component({
    selector: 'shipment-form',
    templateUrl: 'shipment.component.html',
    styleUrls: ['shipment.component.scss']
})

export class ShipmentComponent implements OnInit {
    public shipmentHeader: any = {};
    public inboundList: any = [];
    public filingTypeList: any = [];
    public states: any = [];
    public header: any = {}

    constructor(private route: ActivatedRoute,
        private aesService: AesService,
        private lookupService: LookupService) {

    }

    log(){
        console.log(this.shipmentHeader);
    }

    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            if (param && param.id) {
                this.aesService.getAesById(param.id).then(res => {
                    var aes = res;
                    this.shipmentHeader = aes.shipmentHeader;
                    this.header = aes.header;
                })
            }
            // load aes object and make cache it in service so it can be accessed from all components
        });

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