/**
 * Created by zhailiang on 16/9/23.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpRestService} from "../framework/http.rest.service";

@Injectable()
export class ArticleService extends HttpRestService{

    constructor(private http:Http) {
        super(http, "article");
    }

}