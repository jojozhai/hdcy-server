/**
 * Created by zhailiang on 16/10/24.
 */
import {Injectable} from "@angular/core";
import {HttpRestService} from "../shared/service/http-rest.service";
import {Http} from "@angular/http";

@Injectable()
export class MessageService extends HttpRestService {

    constructor(http: Http) {
        super(http, "message")
    }

}