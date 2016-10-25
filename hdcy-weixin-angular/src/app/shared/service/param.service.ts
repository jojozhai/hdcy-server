/**
 * Created by zhailiang on 16/10/25.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ParamService {

  constructor(private http: Http) {
  }

  getParam(code) {
    return this.http.get(environment.serviceLocation+"param/"+code);
  }

}
