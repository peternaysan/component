import { MasterData } from './../shared/master-data';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Observable, of, concat } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { LookupService } from '../services/lookup.service';


@Component({
  selector: 'commodity-form',
  templateUrl: 'commodity.component.html',
  styleUrls: ['commodity.component.scss']
})

export class CommodityComponent implements OnInit {
  @Input() commodityDetails: any = [];

  @Input() aes;
  @ViewChild("commodityForm") commodityForm: NgForm;
  originGoodsList: any = [];
  exportInformationCode: any = [];
  uomList: any = [];
  hts: Observable<any>;
  htsLoading = false;
  htsinput = new Subject<string>();
  licExemptionCode: Observable<any>;
  licExemptionCodeLoading = false;
  licExemptionCodeinput = new Subject<string>();
  constructor(private lookupService: LookupService) {
  }

  addnewline() {
    var commodity = { commodityLineDetails: {}, licenseDetails: {}, showDelete: true }
    commodity.commodityLineDetails["commodityAction"] = 'A';
    this.commodityDetails.push(commodity);
  }

  ngOnInit() {
    if (this.aes.commodityDetails == null) {
      this.commodityDetails = [];
      this.aes.commodityDetails = this.commodityDetails
      this.addnewline()
    }
    this.commodityDetails.forEach(c => {
      if (!c.commodityLineDetails) {
        c.commodityLineDetails = {};
        c.licenseDetails = {};
      }

      c.commodityLineDetails.commodityAction = "A";
    });

    this.originGoodsList = MasterData.originGoodsList;
    this.exportInformationCode = MasterData.exportInformationCode;
    this.uomList = MasterData.uomList;
    this.loadHtsCodes();
    this.loadLicExemptionCode();
    //initial binding of uom1 and uom2  
    this.commodityDetails.forEach(c => {
      if (c.commodityLineDetails && c.commodityLineDetails.htsNumber) {
        this.lookupService.htsCodes(c.commodityLineDetails.htsNumber).subscribe(items => {
          var htsItems = items as any;
          if (htsItems && htsItems.length > 0) {
            this.onHtsChange(htsItems[0], c);
          }
        })
      }
    });
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

  private loadHtsCodes() {
    var self = this;
    this.hts = concat(
      of([]),
      this.htsinput.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.htsLoading = true),
        switchMap(term => this.lookupService.htsCodes(term).pipe(
          catchError(() => of([])),
          tap(() => this.htsLoading = false)
        ))
      )
    );

    // setTimeout(() => {

    //   if (self.commodityDetails[0].commodityLineDetails.htsNumber) {
    //     self.htsinput.next(self.commodityDetails[0].commodityLineDetails.htsNumber);
    //   }
    //   if (self.commodityDetails[1].commodityLineDetails.htsNumber) {
    //     self.htsinput.next(self.commodityDetails[1].commodityLineDetails.htsNumber);
    //   }
    // }, 2000);

  }

  onHtsChange(item, commodity) {
    if (item) {
      commodity.commodityLineDetails.commodityDescription = item.name.substring(0, 45);
      commodity.commodityLineDetails.quantity1Uom = item.uom1 ? item.uom1 : null;
      commodity.commodityLineDetails.quantity2Uom = item.uom2 ? item.uom2 : null;
    }
    else {
      commodity.commodityLineDetails.commodityDescription = '';
    }
  }

  private loadLicExemptionCode() {
    this.licExemptionCode = concat(
      of([]),
      this.licExemptionCodeinput.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.licExemptionCodeLoading = true),
        switchMap(term => this.lookupService.licExemptionCodes(term).pipe(
          catchError(() => of([])),
          tap(() => this.licExemptionCodeLoading =
            false)
        ))
      )
    );
  }
}