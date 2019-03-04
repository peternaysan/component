import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class LookupService {
    constructor(private http: HttpClient) { }

    states(country:string) {
        return this.http
        .get(environment.apiUrl + 'lookup?country='+country);
      }

      htsCodes(term:string){
        return this.http
        .get(environment.apiUrl + 'lookup/gethtscode?='+term);
      }

      licExemptionCodes(term:string){
        return this.http
        .get(environment.apiUrl + 'lookup/getlicexemptioncode?='+term);
      }
      exportInformationCodes(){
        return this.http
        .get(environment.apiUrl + 'lookup/getexportinformationcode');
      }
}