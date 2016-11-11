/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../config/env.config";

export interface PageInfo {

    page: number;
    size: number;
    sort: string;

}


@Injectable()
export class HttpRestService {

    constructor(protected http: Http, private domain: string) {
    }

    query(condition?: any): Observable<any> {
        return this.http.get(environment.serviceLocation + this.domain, {
            search: this.encodeParams(condition),
            headers: new Headers({'Authorization': environment.userToken})
        });
    }

    getReqUrl(url: string) {
        return environment.serviceLocation + url;
    }

    get(id: number) {
        return this.http.get(environment.serviceLocation + this.domain + "/" + id, this.getBasicHeader()).map(res => res.json());
    }

    create(info: any, callbackFn?: any, errorHandler?: any): void {
        this.http.post(environment.serviceLocation + this.domain, info, this.getBasicHeader()).subscribe(
            res => {
                this.callbackOnSuccess(res, callbackFn);
            },
            err => {
                this.handleException(err, errorHandler);
            }
        );
    }

    update(info: any, callbackFn?: any, errorHandler?: any): void {
        this.http.put(environment.serviceLocation + this.domain, info, this.getBasicHeader()).subscribe(
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
            headers: new Headers({'Authorization': environment.userToken})
        }
    }

    protected callbackOnSuccess(res: any, callbackFn?: any) {
        if (callbackFn && typeof callbackFn == 'function') {
            callbackFn(res.json());
        }
    }

    handleException(err: any, errorHandler?: any) {
        if (errorHandler && typeof errorHandler == 'function') {
            errorHandler(err.json());
        } else {
            if (err.status == 401 || err.status == 403) {
                this.login();
            } else if (err.status == 500) {
                toastr.error(err.json()['errorMsg']);
            }
        }
    }

    login() {
        window.location.href = this.getLoginServicePath();
    }

    private getLoginServicePath(): string {
        if (environment.ENV == 'DEV') {
            return environment.serviceLocation + "weixin/oauth/a2?state=test";
        } else {
            var hash = window.location.hash;
            var encodedHash = encodeURIComponent(hash.substring(1, hash.length));
            var redirectUrl = encodeURIComponent(environment.appLocation + "app2/weixin/oauth/a2");
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${environment.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=${encodedHash}#wechat_redirect`;
        }
    }

    private encodeParams(params: any): URLSearchParams {
        return Object.keys(params)
            .filter(key => params[key])
            .reduce((accum: URLSearchParams, key: string) => {
                accum.append(key, params[key]);
                return accum;
            }, new URLSearchParams());
    }

    getCurrentUserInfo() {
        return this.http.get(environment.serviceLocation + "user/current", this.getBasicHeader());
    }

    sendSmsCheckCode(phone: string) {
        return this.http.get(environment.serviceLocation + "sms/code?phone=" + phone, this.getBasicHeader()).subscribe(
            () => toastr.info('验证码已发送'),
            err => this.handleException(err)
        );
    }

    checkSmsCheckCode(phone: string, code: string) {
        return this.http.get(environment.serviceLocation + "sms/code/check?phone=" + phone + "&code=" + code, this.getBasicHeader());
    }

}
