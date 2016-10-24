/**
 * Created by zhailiang on 16/10/24.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpRestService} from "./http-rest.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService extends HttpRestService {

    constructor(http: Http) {
        super(http, "user");
    }

    getCurrentUserInfo() {
        return this.http.get(environment.serviceLocation + "user/current", this.getBasicHeader());
    }

}