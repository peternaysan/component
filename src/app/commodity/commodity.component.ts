import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../services/aes.service';

@Component({
    selector: 'commodity-form',
    templateUrl: 'commodity.component.html',
    styleUrls: ['commodity.component.scss']
})

export class CommodityComponent implements OnInit {
    constructor(private route: ActivatedRoute, private aesService: AesService) {
       
    }

   ngOnInit() { 
       this.route.queryParams.subscribe(param => {
           if(param && param.id){
             this.aesService.getAesById(param.id).then(res=>{
               console.log(res);
             })
           }          
           // load aes object and make cache it in service so it can be accessed from all components
         });
   }
}