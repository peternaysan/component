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

  addnewline(){
    this.commodityDetails.push({});
  }

  ngOnInit() {
  }
}