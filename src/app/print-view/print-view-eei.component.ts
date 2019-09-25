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
    intermediatePartyNameAddress: string;
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

        // tslint:disable-next-line: max-line-length
        this.intermediatePartyNameAddress = this.IntermediateParty ? this.IntermediateParty.partyName + '\n' + this.IntermediateParty.addressLine1 + ',' +
        this.IntermediateParty.city + ',' + this.IntermediateParty.stateCode + ',' + this.IntermediateParty.postalCode : '';
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

        this.modeOfTransport = MasterData.ModeOfTransportList.filter(mot =>
            mot.id.indexOf(this.aes.transportation.modeofTransport) !== -1)[0].name;

        this.portOfUnlading = this.aes.shipmentHeader.portofUnlading ? MasterData.portOfUnlading.filter(unlad =>
            unlad.code.indexOf(this.aes.shipmentHeader.portofUnlading) !== -1)[0].name : '';

        this.inboundCode = MasterData.InbondCodeList.filter(inb =>
            inb.id.indexOf(this.aes.shipmentHeader.inbondCode) !== -1)[0].name;
        this.filerNameAddress = this.ForwardingAgentParty.partyName + '\n' + this.ForwardingAgentParty.addressLine1 + ',' +
        this.ForwardingAgentParty.city + ',' + this.ForwardingAgentParty.stateCode + ',' + this.ForwardingAgentParty.postalCode;

        this.submittedOn = new Date(this.aes.submittedOn);
        const dateParts = this.aes.shipmentHeader.estimatedExportDate.split("/");
        this.currentDate = new Date();

        const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        this.dateofExportation = dateObject;
    }

    close() {
        this.closeClick.emit({});
    }

    trackByFn(index: number, item: any) {
        return index;
     }
     print() {
        window.print();
     }
}
