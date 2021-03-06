import { MasterData } from './../shared/master-data';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'shipment-form',
    templateUrl: 'shipment.component.html',
    styleUrls: ['shipment.component.scss']
})

export class ShipmentComponent implements OnInit {
    @Input() shipmentHeader: any = {};
    @Input() aes;
    @Input() isUserAllowToEdit;
    public inboundList: any = [];
    public filingTypeList: any = [];
    public portOfExportList: any = [];
    public portOfUnladingList: any = [];
    public states: any = [];
    public country: any = [];
    @Input() header;
    @ViewChild("shipmentHeaderForm") shipmentHeaderForm: NgForm;
    constructor(private lookupService: LookupService) {
    }
    
    ngOnInit() {
        var country = "United States";
        this.lookupService.states(country)
            .subscribe((data) => { this.states = data ; },
                (err) => { console.log(err); }
            );
        this.inboundList = MasterData.InbondCodeList;
        this.filingTypeList = MasterData.filingTypeList;
        this.country = MasterData.countryList;
        this.portOfExportList = MasterData.portOfExport;
        this.portOfUnladingList = MasterData.portOfUnlading;
    }

    ngAfterViewInit() {

    }

    submitted = false;

    get isValid() {
        this.submitted = true;
        return this.shipmentHeaderForm.valid;
    }
    searchByIdAndName(term: string, item: any) {
        var name = item.name.toLowerCase();
        var term = term.toLowerCase();
        if (item.id) {
            var id = item.id.toLowerCase();
            return name.indexOf(term) > -1 || id.indexOf(term) > -1;
        }
        else if (item.code) {
            var code = item.code.toLowerCase();
            return name.indexOf(term) > -1 || code.indexOf(term) > -1;
        }
        else {
            return name.indexOf(term) > -1;
        }
    }
}