import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AesService } from '../../app/services/aes.service';
import { MasterData } from '../../app/shared/master-data';
import { LookupService } from '../services/lookup.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'shipment-form',
    templateUrl: 'shipment.component.html',
    styleUrls: ['shipment.component.scss']
})

export class ShipmentComponent implements OnInit {
    @Input() shipmentHeader: any = {};
    public inboundList: any = [];
    public filingTypeList: any = [];
    public states: any = [];
    public country: any = [];
    @Input() header;
    @ViewChild("shipmentHeaderForm") shipmentHeaderForm: NgForm;
    constructor(private lookupService: LookupService) {
    }

    log() {
        console.log(this.shipmentHeader);
    }
    ngOnInit() {
        var country = "United States";
        this.lookupService.states(country)
            .subscribe((data) => { this.states = data },
                (err) => { console.log(err); }
            );
        this.inboundList = MasterData.InbondCodeList;
        this.filingTypeList = MasterData.filingTypeList;
        this.country = MasterData.countryList;
    }

    ngAfterViewInit() {

    }

    get isValid(){
      return this.shipmentHeaderForm.valid;
    }
}