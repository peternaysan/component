import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AesService} from '../app/services/aes.service'
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aes-component';
  public aesId :string;
  constructor() {
    var self=this;
    
  }

  onSubmitClick(){
    console.log("onSubmitClick");
  }
}
