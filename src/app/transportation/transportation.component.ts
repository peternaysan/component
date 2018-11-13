import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AesService } from '../services/aes.service';
import { NgForm } from '@angular/forms';
import { MasterData } from '../../app/shared/master-data';


@Component({
  selector: 'transportation-form',
  templateUrl: 'transportation.component.html',
  styleUrls: ['transportation.component.scss']
})

export class TransportationComponent implements OnInit {

  @ViewChild("transportForm") transportForm: NgForm;
  @Input() transportation;
  public modeOfTransport: any = [];

  constructor(private aesService: AesService) {
  }

  test() {
    console.log(this.transportForm);
  }

  ngOnInit() {
    this.modeOfTransport = MasterData.ModeOfTransportList;
    if (!this.transportation.transportationDetails) {
      this.transportation.transportationDetails = [];
    }
  }

  submitted = false;
  get isValid() {
    console.log(this.transportForm);    
    this.submitted = true;
    return this.transportForm.valid;
  }
}