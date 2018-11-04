import { MasterData } from './../shared/master-data';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'commodity-form',
  templateUrl: 'commodity.component.html',
  styleUrls: ['commodity.component.scss']
})

export class CommodityComponent implements OnInit {
  @Input() commodityDetails: any = [];
  @ViewChild("commodityForm") commodityForm: NgForm;
  originGoodsList: any = [];
  constructor() {
  }

  addnewline() {
    var commodity = { commodityLineDetails: {}, licenseDetails: {}, showDelete: true }
    this.commodityDetails.push(commodity);
  }

  ngOnInit() {
    if (this.commodityDetails.length == 0) {
      this.addnewline()
    }
    this.commodityDetails.forEach(c => {
      if (!c.commodityLineDetails) {
        c.commodityLineDetails = {};
        c.licenseDetails = {};
      }
    });

    this.originGoodsList = MasterData.originGoodsList;
  }

  ondeleteclick($event, item) {
    $event.stopPropagation();
    console.log(item);
    var index = this.commodityDetails.indexOf(item);
    if (index >= 0) {
      this.commodityDetails.splice(index, 1);
    }
  }
  submitted = false;
  get isValid() {
    this.submitted = true;
    return this.commodityForm.valid;
  }
}