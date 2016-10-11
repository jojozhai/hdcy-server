import {PageInfo} from "../service/http-rest.service";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by zhailiang on 16/9/26.
 */
export class ListComponent {

  pageInfo: PageInfo;

  constructor(protected route: ActivatedRoute) {

    let size: number = route.snapshot.params['size'];
    let page: number = route.snapshot.params['page'];
    let sort: string = route.snapshot.params['sort'];

    if (!size && route.snapshot.data[0]) {
      size = route.snapshot.data[0]['size'];
    }
    if (!page && route.snapshot.data[0]) {
      page = route.snapshot.data[0]['page'];
    }
    if (!sort && route.snapshot.data[0]) {
      sort = route.snapshot.data[0]['sort'];
    }

    if (!size) {
      size = 10;
    }
    if (!page) {
      page = 0;
    }
    if (!sort) {
      sort = 'createdTime,desc';
    }

    this.pageInfo = {
      size: size,
      page: page,
      sort: sort
    }

  }

  getQueryParam(name: string) {
    return this.route.snapshot.queryParams[name];
  }

  buildCondition(condition?: any) {
    if (!condition) {
      condition = {};
    }
    if (!condition.page) {
      condition.page = this.pageInfo.page;
    }

    if (!condition.size) {
      condition.size = this.pageInfo.size;
    }

    if (!condition.sort) {
      condition.sort = this.pageInfo.sort;
    }
    return condition;
  }


}
