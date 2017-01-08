/**
 * Created by zhailiang on 16/9/27.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../config/env.config";

@Injectable()
export class TagService {

    constructor(private http:Http) {
    }

    getChild(parentId?:number): Observable<any> {
        let url:string = environment.serviceLocation  + "tag/child?parentId="+(parentId?parentId:"");
        return this.http.get(url).map(res => res.json());
    }

}
