import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { MasterData } from './../shared/master-data';
import { PrintView } from '../shared/interface/print-view.interface';

@Component({
    selector: 'aes-print-view-eei',
    templateUrl: 'print-view-eei.component.html',
    styleUrls : ['print-view-eei.component.scss']
})

export class PrintViewEeiComponent implements OnInit {
    @Input() aes;
    @Input() PrintViewData: PrintView;
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
    portOfExport: string;
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
    shipmentStatus: string;
    consigneeType: string;

    constructor() {
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
        this.intermediatePartyNameAddress = this.IntermediateParty ? (this.IntermediateParty.partyName + '\n' + this.IntermediateParty.addressLine1 + ',' +
        this.IntermediateParty.city + (this.IntermediateParty.stateCode ? ', ' + this.IntermediateParty.stateCode : '')
         +
        (this.IntermediateParty.postalCode ? ' ' + this.IntermediateParty.postalCode : ''))
        + ', ' + this.IntermediateParty.countryCode : '';
        this.country = MasterData.countryList;
        this.countryName = MasterData.countryList.filter(country =>
            country.code.indexOf(this.aes.shipmentHeader.ultimateDestinationCountry) !== -1)[0].name;

        this.modeOfTransport = MasterData.ModeOfTransportList.filter(mot =>
            mot.id.indexOf(this.aes.transportation.modeofTransport) !== -1)[0].name;

        this.portOfUnlading = this.aes.shipmentHeader.portofUnlading ? MasterData.portOfUnlading.filter(unlad =>
            unlad.code.indexOf(this.aes.shipmentHeader.portofUnlading) !== -1)[0].name : '';

        this.portOfExport = this.aes.shipmentHeader.portofExportation ? MasterData.portOfExport.filter(unlad =>
                              unlad.code.indexOf(this.aes.shipmentHeader.portofExportation) !== -1)[0].name : '';

        this.inboundCode = MasterData.InbondCodeList.filter(inb =>
            inb.id.indexOf(this.aes.shipmentHeader.inbondCode) !== -1)[0].name;
        this.filerNameAddress = this.ForwardingAgentParty.partyName + '\n' + this.ForwardingAgentParty.addressLine1 + ',' +
        this.ForwardingAgentParty.city + ',' + this.ForwardingAgentParty.stateCode + ' ' + this.ForwardingAgentParty.postalCode
        + ', ' + this.ForwardingAgentParty.countryCode;

        this.submittedOn = new Date(this.aes.submittedOn);
        const dateParts = this.aes.shipmentHeader.estimatedExportDate.split("/");
        this.currentDate = new Date();

        const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        this.dateofExportation = dateObject;

        this.shipmentStatus = this.aes.submissionResponse.customsResponseList ?
                                this.aes.submissionResponse.customsResponseList.filter(status =>
                                status.narrativeText.toLocaleLowerCase().indexOf(
                                this.aes.submissionStatusDescription.toLocaleLowerCase()) !== -1)[0]
                                .responseCode + ':' + this.aes.submissionStatusDescription
                                : '';

        this.consigneeType = MasterData.ultimateConsigneeType.filter(type =>
            type.id.indexOf(this.UltimateParty.ultimateConsigneeType) !== -1)[0].name;
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
