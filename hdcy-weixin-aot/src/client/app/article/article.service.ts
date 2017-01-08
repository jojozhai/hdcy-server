/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpRestService} from "../shared/service/http-rest.service";

@Injectable()
export class ArticleService extends HttpRestService{

    constructor(http:Http) {
        super(http, "article");
    }

}
