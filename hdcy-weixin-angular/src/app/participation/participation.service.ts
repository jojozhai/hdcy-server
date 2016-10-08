/**
 * Created by zhailiang on 16/10/8.
 */
import { Injectable } from '@angular/core';
import {HttpRestService} from "../shared/service/http-rest.service";
import {Http} from "@angular/http";

@Injectable()
export class ParticipationService extends HttpRestService {

    constructor(http: Http) {
      super(http, "participation");
    }

}
