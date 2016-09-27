/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "rxjs";

export interface PageInfo {

    page: number;
    size: number;
    sort: string;

}


@Injectable()
export class HttpRestService {

    private HTTP_PROFIX = "http://127.0.0.1:8171/weixin2/";

    private user: string;

    constructor(private http:Http, private domain:string) { }

    query(condition?):Observable<any> {
        return this.http.get(this.HTTP_PROFIX + this.domain, {
            search: this.encodeParams(condition),
            headers: new Headers({'Authorization': this.user})
        });
    }

    get(id: number) {
        return this.http.get(this.HTTP_PROFIX + this.domain + "/" + id, this.getBasicHeader()).map(res => res.json());
    }

    create(info: any, callbackFn?, errorHandler?):void {
        this.http.post(this.HTTP_PROFIX + this.domain, info, this.getBasicHeader()).subscribe(
            res => {
                this.callbackOnSuccess(res, callbackFn);
            },
            err => {
                this.handleException(err, errorHandler);
            }
        );
    }

    update(info: any, callbackFn?, errorHandler?):void {
        this.http.put(this.HTTP_PROFIX + this.domain, info, this.getBasicHeader()).subscribe(
            res => {
                this.callbackOnSuccess(res, callbackFn);
            },
            err => {
                this.handleException(err, errorHandler);
            }
        );
    }

    getBasicHeader() {
        return {
            headers: new Headers({'Authorization': this.user})
        }
    }

    private callbackOnSuccess(res, callbackFn?) {
        if(callbackFn &&  typeof callbackFn == 'function') {
            callbackFn(res.json());
        }
    }

    private handleException(err, errorHandler?) {
        if(errorHandler &&  typeof errorHandler == 'function') {
            errorHandler(err.json());
        } else {
            if(err.status == 401 || err.status == 403) {
                this.login();
            }else if(err.status == 500) {
                alert(err.json()['errorMsg']);
            }
        }
    }

    private login() {
        this.http.get(this.HTTP_PROFIX + "weixin/oauth/app?state=test")
            .subscribe(res => this.user = res.json().content);
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