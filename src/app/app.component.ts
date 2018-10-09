import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aes-component';
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(param => {
      console.log(param.id);
      // load aes object and make cache it in service so it can be accessed from all components
    });
  }
}
