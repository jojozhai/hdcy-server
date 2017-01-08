/**
 * Created by zhailiang on 16/10/25.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../config/env.config";

@Injectable()
export class ParamService {

  constructor(private http: Http) {
  }

  getParam(code:string) {
    return this.http.get(environment.serviceLocation+"param/"+code);
  }

}
