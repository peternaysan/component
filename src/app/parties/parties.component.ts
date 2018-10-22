import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../services/aes.service';
import { LookupService } from '../services/lookup.service';

@Component({
  selector: 'parties-form',
  templateUrl: 'parties.component.html',
  styleUrls: ['parties.component.scss']
})

export class PartiesComponent implements OnInit {

  public shipmentParty:any=[];
  public states:any=[];
  
  constructor(private route: ActivatedRoute, private aesService: AesService,private lookupService:LookupService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param && param.id) {
        this.aesService.getAesById(param.id).then(res => {
          var aes = res;
          this.shipmentParty = aes.shipmentParty;
        })
      }
      // load aes object and make cache it in service so it can be accessed from all components
    });
  }
  ngAfterViewInit() {
    var country="United States";
    this.lookupService.states(country)
    .subscribe((data) => {this.states=data},
        (err) => { console.log(err); }
    );
  }

  

}