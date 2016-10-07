import { Component } from '@angular/core';

import { HTTPTestService } from './http-test.service';

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test Get Request</button>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test Post Request</button>
        <p>Output: {{postData}}</p>
        {{ data }}
    `
})
export class HTTPTestComponent {
    getData: string;
    data: string;
    constructor (private _httpService: HTTPTestService) {
       
    }

    onTestGet() {
        this._httpService.getJSON()
            .subscribe(data => this.getData = JSON.stringify(data));
    }
    onTestPost() {
        console.log('click');
        this._httpService.postJSON()
            .subscribe(data => this.data = JSON.stringify(data));
    }

}