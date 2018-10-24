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
        var self = this;
        return new Promise<any>((resolve, reject) => {
            if (this.aesEntry) {
                resolve(this.aesEntry);
            }
            else {
                this.http
                    .get(environment.apiUrl + "aes/" + Id).subscribe(res => {
                        self.aesEntry = res;
                        resolve(res);
                    }, error => {
                        reject(error);
                    })
            }
        });
    }

    public savedraft(aesId, aesObject) {
        return this.http.put(`${environment.apiUrl}aes/${aesId}`, aesObject);
    }

    public submitAes(aesId, aesObject) {
        // return this.getAesById(Id).then(res => {
        console.log("Submitted AES", aesId, aesObject);
        //submit to IX   
        // })
    }

    private extractData(res: Response) {

        //alert(res);       
        let body = res.json();
        //alert(body);
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
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