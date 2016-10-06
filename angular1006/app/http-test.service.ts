import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HTTPTestService {
    constructor (private _http: Http) {}

    getCurrentTime() {
        return this._http.get('localhost:1337/data')
            .map(res => res.json());
    }
    postJSON() {

    }
}