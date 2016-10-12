import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    confirmEmail(email) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://localhost:1337/data', JSON.stringify({ "email": email}), { headers })
            .map(res => res.json())
            .map((res) => {

                if (res.success) {
                    return res.email;
                    /*localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;*/
                }

                console.log(res.error);
            });
    }

    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        

        return this.http
            .post('http://localhost:1337/data', JSON.stringify({ "email": email, "password": password }), { headers })
            .map(res => res.json())
            .map((res) => {
                if (res.auth_token) {

                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }

                return res.auth_token;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}