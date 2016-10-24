/**
 * Created by zhailiang on 16/10/24.
 */
import {Injectable} from "@angular/core";
import {HttpRestService} from "../shared/service/http-rest.service";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class MyService extends HttpRestService{

    constructor(http:Http) {
        super(http, "my");
    }

    getMyActivity() {
        return this.http.get(environment.serviceLocation + "participator?size=1000&sort=createdTime,desc", this.getBasicHeader());
    }
}