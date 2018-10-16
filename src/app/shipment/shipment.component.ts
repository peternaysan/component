import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AesService} from '../../app/services/aes.service';



@Component({
    selector: 'shipment-form',
    templateUrl: 'shipment.component.html',
    styleUrls: ['shipment.component.scss']
})

export class ShipmentComponent implements OnInit {
    public aes:any={};
    public shipmentHeader ={};
    constructor(private route: ActivatedRoute, private aesService: AesService) {
       
     }

    ngOnInit() { 
        this.route.queryParams.subscribe(param => {
            if(param && param.id){
              this.aesService.getAesById(param.id).then(res=>{
                this.aes=res;
                this.shipmentHeader=this.aes.shipmentHeader;
              })
            }          
            // load aes object and make cache it in service so it can be accessed from all components
          });
    }
}