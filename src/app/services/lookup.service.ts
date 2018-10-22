import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppSettings } from '../shared/app-settings'


@Injectable()
export class LookupService {
    constructor(private http: HttpClient) { }

    states(country:string) {
        return this.http
        .get(environment.apiUrl + 'lookup?country='+country);
      }

}