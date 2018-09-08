import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private uri: string = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(`${this.uri}/users`)
    }

    getComments(): Observable<Icomments[]> {
        return this.http.get<Icomments[]>(`${this.uri}/comments`)
    }
}

export interface Icomments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
