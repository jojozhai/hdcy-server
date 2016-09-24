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

    query(condition?):Observable<Array<any>> {
        return this.http.get(HTTP_PROFIX + this.domain, {search: this.encodeParams(condition)})
            .map(res => res.json().content);
    }

    get(id: number) {
        return this.http.get(HTTP_PROFIX + this.domain + "/" + id).map(res => res.json());
    }

    create(info: any, callback?, errorHandler?):void {
        this.http.post(HTTP_PROFIX + this.domain, info).subscribe(
            res => {
                if(callback &&  typeof callback == 'function') {
                    callback(res.json());
                }
            },
            err => {
                if(errorHandler &&  typeof errorHandler == 'function') {
                    errorHandler(err.json());
                } else {
                    if(err.status == 403) {
                        this.login();
                    }else if(err.status == 500) {
                        alert(err.json()['errorMsg']);
                    }
                }
            }
        );
    }

    private login() {
        window.location.href = "http://127.0.0.1:8171/weixin2/weixin/oauth?state=test";
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