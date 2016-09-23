/**
 * Created by zhailiang on 16/9/23.
 */
import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {HTTP_PROFIX} from "../app.module";

@Injectable()
export class HttpRestService {

    constructor(private http:Http, private domain:string) { }

    query(condition?):Observable {
        return this.http.get(HTTP_PROFIX + this.domain, {search: this.encodeParams(condition)})
            .map(res => res.json().content);
    }

    private encodeParams(params): URLSearchParams{
        return Object.keys(params)
            .filter(key => params[key])
            .reduce((accum: URLSearchParams, key: string) => {
                accum.append(key, params[key]);
                return accum;
            }, new URLSearchParams());
    }


}