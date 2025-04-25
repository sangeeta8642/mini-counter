import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MasterServices {

    constructor(
        private httpCliet: HttpClient
    ) {

    }

    getAllPosts(): Observable<blogModel[]> {
        return this.httpCliet.get<blogModel[]>('https://dummyjson.com/posts');
    }

}

export interface blogModel {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: string[],
    views: number,
    userId: number

}