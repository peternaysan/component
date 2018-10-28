import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'commodity-form',
  templateUrl: 'commodity.component.html',
  styleUrls: ['commodity.component.scss']
})

export class CommodityComponent implements OnInit {
  @Input() commodityDetails: any = [];
  constructor() {
  }

  addnewline() {
    var commodity = { commodityLineDetails: {}, licenseDetails: {} }
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
  }
}