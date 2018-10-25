import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AesService } from '../services/aes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'transportation-form',
  templateUrl: 'transportation.component.html',
  styleUrls: ['transportation.component.scss']
})

export class TransportationComponent implements OnInit {

  @ViewChild("transportForm") transportForm : NgForm;
  public transportation: any = {};
  constructor(private route: ActivatedRoute, private aesService: AesService) {

  }
  test(){
    console.log(this.transportForm);
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      if (param && param.id) {
        this.aesService.getAesById(param.id).then(res => {
          var aes = res;
          this.transportation = res.transportation;
        })
      }
      // load aes object and make cache it in service so it can be accessed from all components
    });
  }
}