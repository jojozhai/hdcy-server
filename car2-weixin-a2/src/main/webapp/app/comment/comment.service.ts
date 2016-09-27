/**
 * Created by zhailiang on 16/9/24.
 */
import { Injectable } from '@angular/core';
import {HttpRestService} from "../mirage/service/http-rest.service";
import {Http} from "@angular/http";

@Injectable()
export class CommentService extends HttpRestService{

    constructor(http: Http) {
        super(http, 'comment');
    }

}
