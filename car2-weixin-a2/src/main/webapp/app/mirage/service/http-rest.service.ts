/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

export interface PageInfo {

    page: number;
    size: number;
    sort: string;

}


@Injectable()
export class HttpRestService {

    private HTTP_PROFIX = "http://127.0.0.1:8171/weixin2/";

    constructor(private http:Http, private domain:string) { }

    query(condition?):Observable<any> {
        return this.http.get(this.HTTP_PROFIX + this.domain, {search: this.encodeParams(condition)});
    }

    get(id: number) {
        return this.http.get(this.HTTP_PROFIX + this.domain + "/" + id).map(res => res.json());
    }

    create(info: any, callbackFn?, errorHandler?):void {
        this.http.post(this.HTTP_PROFIX + this.domain, info).subscribe(
            res => {
                this.callbackOnSuccess(res, callbackFn);
            },
            err => {
                this.handleException(err, errorHandler);
            }
        );
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
            if(err.status == 403) {
                this.login();
            }else if(err.status == 500) {
                alert(err.json()['errorMsg']);
            }
        }
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