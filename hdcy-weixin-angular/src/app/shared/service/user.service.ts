/**
 * Created by zhailiang on 16/10/24.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpRestService} from "./http-rest.service";
import {environment} from "../../../environments/environment";

export interface UserProperty {
  name: string,
  value: string
}

@Injectable()
export class UserService extends HttpRestService {

  constructor(http: Http) {
    super(http, "user");
  }

  getCurrentUserInfo() {
    return this.http.get(environment.serviceLocation + "user/current", this.getBasicHeader());
  }

  setUserProperty(property: UserProperty) {
    return this.http.put(environment.serviceLocation + "user/property", property, this.getBasicHeader());
  }

  setUserPropertys(properties: Array<UserProperty>) {
    return this.http.put(environment.serviceLocation + "user/propertys", properties, this.getBasicHeader());
  }

}
