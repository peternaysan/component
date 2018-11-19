import { AesService } from './../services/aes.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    list;
    aesdatalist
    constructor(private aesService: AesService) { }

    ngOnInit() {
        this.aesService.getdashboardsummary().subscribe(result => {
            this.list = result;
        });
    }

    onitemclick(item){
        this.aesdatalist  = [];
        this.aesService.getallbystatus(item.name).subscribe(result => {
            this.aesdatalist = result;
            console.log(result);
            
        });
    }
}