/**
 * Created by zhailiang on 16/9/27.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpRestService} from "./http-rest.service";

@Injectable()
export class PraiseService extends HttpRestService{

  constructor(http:Http) {
    super(http, "praise");
  }

}
