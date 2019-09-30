import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class LookupService {
    constructor(private http: HttpClient) { }
    private states$ = new ReplaySubject(1);

    states(country: string) {
      console.log(`length is : ${this.states$.observers.length}`);
      if (!this.states$.observers.length) {
        this.states$ = new ReplaySubject(1);
        return this.http
        .get(environment.apiUrl + 'lookup/getallstates?country=' + country);
      }
    }

      htsCodes(term: string) {
        return this.http
        .get(environment.apiUrl + 'lookup/gethtscode?=' + term);
      }

      licExemptionCodes() {
        return this.http
        .get(environment.apiUrl + 'lookup/getlicexemptioncode');
      }
      exportInformationCodes() {
        return this.http
        .get(environment.apiUrl + 'lookup/getexportinformationcode');
      }
}
