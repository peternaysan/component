import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../services/aes.service';

@Component({
    selector: 'transportation-form',
    templateUrl: 'transportation.component.html',
    styleUrls: ['transportation.component.scss']
})

export class TransportationComponent implements OnInit {
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