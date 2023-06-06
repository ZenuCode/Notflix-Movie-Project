import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiBackend = 'http://localhost:4231'

    constructor(private http: HttpClient) { }

    signUp(info: Array<string>) {
        const user = {
            "username": info[0],
            "password": info[1],
            "email": info[2],
            "role": info[3],
            "tmdb_key": info[4]
        }
        return this.http.post(`${this.apiBackend}/auth/signup`, user);
    }

    signIn(storeData: FormGroup) : Observable<any> {
        const user = {
            "email": storeData.value.email,
            "password": storeData.value.password,
        }
        return this.http.post(`${this.apiBackend}/auth/signin`, user);
    }

    checkEmail(email: string) : Observable<any> {
        const user = { "email": email }
        return this.http.post(`${this.apiBackend}/auth/check-email`, user)
    }
}