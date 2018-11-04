import { element } from 'protractor';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { MasterData } from '../../app/shared/master-data';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'parties-form',
  templateUrl: 'parties.component.html',
  styleUrls: ['parties.component.scss']
})
export class PartiesComponent implements OnInit {

  @Input() shipmentParty;
  public states: any = [];
  public partyIdType: any = [];
  public partyType: any = [];
  public ultimateConsignee: any;
  public intermediateConsignee: any;
  public freightForwarder: any;
  public usppi: any = {}
  @ViewChild("partiesForm") partiesForm: NgForm;
  constructor(private lookupService: LookupService) {
  }

  ngOnInit() {
    var self = this;
    this.shipmentParty.forEach(element => {
      if (element.partyType == "C") {
        self.ultimateConsignee = element;
        self.ultimateConsignee.ToBeSoldenRouteIndicator="N";
      } else if (element.partyType == "I") {
        self.intermediateConsignee = element;
      } else if (element.partyType == "F") {
        self.freightForwarder = element;
      }
    });
    var country = "United States";
    this.lookupService.states(country)
      .subscribe((data) => { this.states = data },
        (err) => { console.log(err); }
      );
    this.partyIdType = MasterData.partyIdTypeList;
    this.partyType = MasterData.partyTypeList;
  }

  submitted = false;
  get isValid() {
    this.submitted = true;
    return this.partiesForm.valid;
  }

}