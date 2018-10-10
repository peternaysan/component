import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppSettings } from '../shared/app-settings'


@Injectable()
export class AesService {

    aesEntry;
    constructor(private http: HttpClient) { }

    public getAesById(Id: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            if (this.aesEntry) {
                resolve(this.aesEntry);
            }
            else {
                return this.http
                    .get(this.appendGuidToUrl(environment.apiUrl + "aes/" + Id))
                    .pipe(
                        catchError(this.handleError('getAesById', []))).toPromise();
            }

        });

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    appendGuidToUrl(url: string) {
        if (AppSettings.IsBrowserIE) {
            if (url.indexOf('?') !== -1) {
                url = url + '&g=' + this.guid();
            } else {
                url = url + '?g=' + this.guid();
            }
        }

        return url;
    }
    public guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}