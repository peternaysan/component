import { Component, OnInit, Input,ViewChild } from '@angular/core';
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
  
  @ViewChild("partiesForm") partiesForm: NgForm;

  constructor(private lookupService: LookupService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var country = "United States";
    this.lookupService.states(country)
      .subscribe((data) => { this.states = data },
        (err) => { console.log(err); }
      );
    this.partyIdType = MasterData.partyIdTypeList;
    this.partyType = MasterData.partyTypeList;
  }
}