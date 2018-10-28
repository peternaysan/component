import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../services/aes.service';

@Component({
  selector: 'commodity-form',
  templateUrl: 'commodity.component.html',
  styleUrls: ['commodity.component.scss']
})

export class CommodityComponent implements OnInit {
  public commodityDetails: any = [];
  constructor(private route: ActivatedRoute, private aesService: AesService) {
  }

  addnewline(){
    var commodity={commodityLineDetails:{},licenseDetails:{}}
    this.commodityDetails.push(commodity);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param && param.id) {
        this.aesService.getAesById(param.id).then(res => {
          var aes = res;
          this.commodityDetails = aes.commodityDetails;
          if (this.commodityDetails.length == 0) {
            this.addnewline()
          }
          this.commodityDetails.forEach(c => {
            if (!c.commodityLineDetails) {
              c.commodityLineDetails = {};
              c.licenseDetails = {};
            }
          });
        })
      }
      // load aes object and make cache it in service so it can be accessed from all components
    });
  }
}