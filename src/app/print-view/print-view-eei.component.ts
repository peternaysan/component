import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { MasterData } from './../shared/master-data';
import { LookupService } from '../services/lookup.service';

@Component({
    selector: 'aes-print-view-eei',
    templateUrl: 'print-view-eei.component.html',
    styleUrls : ['print-view-eei.component.scss']
})

export class PrintViewEeiComponent implements OnInit {
    @Input() aes;
    UsppiParty: any;
    UltimateParty: any;
    ForwardingAgentParty: any;
    IntermediateParty: any;

    @Input() printView;
    @Output() closeClick = new EventEmitter();
    @Output() showMainView = new EventEmitter();
    country: any = [];
    states: any = [];
    portOfUnlading: string;
    modeOfTransport: string;
    aesUsppiParty: any;
    countryName: string;
    stateOfOrigin: string;
    inboundCode: string;
    rowId: number;
    submittedOn: Date;
    filerNameAddress: string;
    dateofExportation: Date;
    currentDate: Date;

    constructor(private lookupService: LookupService) {
    }

    ngOnInit(): void {
        this.UsppiParty = this.aes.shipmentParty.filter(party =>
            party.partyType.toLocaleLowerCase().indexOf('e') !== -1)[0];

        this.UltimateParty = this.aes.shipmentParty.filter(party =>
            party.partyType.toLocaleLowerCase().indexOf('c') !== -1)[0];

        this.ForwardingAgentParty = this.aes.shipmentParty.filter(party =>
            party.partyType.toLocaleLowerCase().indexOf('f') !== -1)[0];

        this.IntermediateParty = this.aes.shipmentParty.filter(party =>
                party.partyType.toLocaleLowerCase().indexOf('i') !== -1)[0];

        this.country = MasterData.countryList;
        this.countryName = MasterData.countryList.filter(country =>
            country.code.indexOf(this.aes.shipmentHeader.ultimateDestinationCountry) !== -1)[0].name;

        const country = 'United States';
        this.lookupService.states(country)
            .subscribe((data) => { this.states = data; },
                (err) => { console.log(err); }
            );
        this.stateOfOrigin = this.states.filter(states =>
            states.Code.indexOf(this.aes.shipmentHeader.originState) !== -1);
        // modeofTransport
        this.modeOfTransport = MasterData.ModeOfTransportList.filter(mot =>
            mot.id.indexOf(this.aes.transportation.modeofTransport) !== -1)[0].name;

        this.portOfUnlading = this.aes.shipmentHeader.portofUnlading ? MasterData.portOfUnlading.filter(unlad =>
            unlad.code.indexOf(this.aes.shipmentHeader.portofUnlading) !== -1)[0].name : '';

        this.inboundCode = MasterData.InbondCodeList.filter(inb =>
            inb.id.indexOf(this.aes.shipmentHeader.inbondCode) !== -1)[0].name;
        this.filerNameAddress = this.ForwardingAgentParty.partyName + '\n' + this.ForwardingAgentParty.addressLine1 + ',' +
        this.ForwardingAgentParty.city + ',' + this.ForwardingAgentParty.stateCode + ',' + this.ForwardingAgentParty.postalCode;


        this.submittedOn = new Date(this.aes.submittedOn);
        var dateString = "23/10/2015"; // Oct 23

var dateParts = this.aes.shipmentHeader.estimatedExportDate.split("/");
        this.currentDate = new Date();

// month is 0-based, that's why we need dataParts[1] - 1
var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
this.dateofExportation = dateObject;
        console.log(dateObject.toString());
        }

    close() {
        this.closeClick.emit({});
    }
    trackByFn(index, item) {
        this.rowId = index + 1;
        return index + 1;
     }
     print() {
        window.print();
        var data = document.getElementById('printbox'); 
     }
}
