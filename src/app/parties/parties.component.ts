import { MasterData } from './../shared/master-data';
import { element } from 'protractor';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LookupService } from '../services/lookup.service';
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
  public usppiPartyIdTypeList: any = [];
  public partyType: any = [];
  public ultimateConsigneeType: any = [];
  public countryList: any = [];
  public ultimateConsignee: any = {};
  public ultimateConsigneeFlag: boolean;
  public originalUltimateConsignee: any;
  public intermediateConsignee: any;
  public freightForwarder: any;
  public usppi: any;
  @ViewChild("partiesForm") partiesForm: NgForm;
  constructor(private lookupService: LookupService) {
  }

  ngOnInit() {
    this.shipmentParty.forEach(element => {
      if (element.partyType == "C") {
        this.originalUltimateConsignee = JSON.parse(JSON.stringify(element));
        if (!element.consigneeFromGf) {
          this.ultimateConsignee = element;
          this.onChangeConsigneeFromGf(false);
          this.ultimateConsignee.consigneeFromGf = "N";
        } else if (element.consigneeFromGf == "Y") {
          this.ultimateConsigneeFlag = true;
          this.ultimateConsignee = element;
        } else {
          this.ultimateConsignee = element;
        }
      } else if (element.partyType == "I") {
        this.intermediateConsignee = element;
      } else if (element.partyType == "F") {
        this.freightForwarder = element;
      } else if (element.partyType == "E") {
        this.usppi = element;
      }
    });

    if (!this.usppi) {
      this.usppi = { partyType: "E" };
      this.shipmentParty.push(this.usppi);
    }
    var country = "United States";
    this.lookupService.states(country)
      .subscribe((data) => { this.states = data },
        (err) => { console.log(err); }
      );
    this.partyIdType = MasterData.partyIdTypeList;
    this.partyType = MasterData.partyTypeList;
    this.countryList = MasterData.countryList;
    this.ultimateConsigneeType = MasterData.ultimateConsigneeType;
    this.usppiPartyIdTypeList = MasterData.usppiPartyIdTypeList;
  }

  submitted = false;
  get isValid() {
    this.submitted = true;
    return this.partiesForm.valid;
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

  onChangeConsigneeFromGf() {
    if (this.ultimateConsigneeFlag) {
      for (var k in this.originalUltimateConsignee)
        this.ultimateConsignee[k] = this.originalUltimateConsignee[k];
      this.ultimateConsignee.consigneeFromGf = "Y";
    }
    else {
      // for (const prop of Object.keys(this.ultimateConsignee)) {
      //   delete this.ultimateConsignee[prop];
      // }
      for (var k in this.ultimateConsignee)
        this.ultimateConsignee[k] = null;
      this.ultimateConsignee.consigneeFromGf = "N";
      this.ultimateConsignee.partyType = "C";
    }
    this.ultimateConsignee.toBeSoldenRouteIndicator = "N";

  }

}