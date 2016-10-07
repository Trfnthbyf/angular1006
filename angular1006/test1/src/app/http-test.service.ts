import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HTTPTestService {
    constructor (private _http: Http) {}

    getJSON() {
        return this._http.get('http://localhost:1337/data')
            .map(res => res.json());
    }
    postJSON() {
        let json = JSON.stringify({
            "data": {
                "text": "My awesome text!",
                "value": 7777,
                "is": true
            }
        });
        let params = 'json=' + json;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:1337/data', params, {
            headers: headers
        })
        .map(res => res.json());
    }
}