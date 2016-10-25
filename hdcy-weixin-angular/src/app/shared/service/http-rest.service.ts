/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

export class PageInfo {

  page: number;
  size: number;
  sort: string;

}


@Injectable()
export class HttpRestService {

  constructor(protected http: Http, private domain: string) {
  }

  query(condition?): Observable<any> {
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

  create(info: any, callbackFn?, errorHandler?): void {
    this.http.post(environment.serviceLocation + this.domain, info, this.getBasicHeader()).subscribe(
      res => {
        this.callbackOnSuccess(res, callbackFn);
      },
      err => {
        this.handleException(err, errorHandler);
      }
    );
  }

  update(info: any, callbackFn?, errorHandler?): void {
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

  protected callbackOnSuccess(res, callbackFn?) {
    if (callbackFn && typeof callbackFn == 'function') {
      callbackFn(res.json());
    }
  }

  handleException(err, errorHandler?) {
    if (errorHandler && typeof errorHandler == 'function') {
      errorHandler(err.json());
    } else {
      if (err.status == 401 || err.status == 403) {
        this.login();
      } else if (err.status == 500) {
        alert(err.json()['errorMsg']);
      }
    }
  }

  login() {
    window.location.href = environment.getLoginServicePath();
  }

  private encodeParams(params): URLSearchParams {
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

}
