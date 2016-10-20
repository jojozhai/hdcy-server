import {Directive, ElementRef, HostListener, Input} from "@angular/core";
import {HttpRestService, PageInfo} from "../service/http-rest.service";
/**
 * Created by zhailiang on 16/9/26.
 */

@Directive({selector: '[infinite-scroll]'})
export class InfiniteScrollDirective {

  constructor(private el: ElementRef) {
  }

  @Input() dataService: HttpRestService;

  @Input('infinite-scroll') dataList: Array<any> = [];

  @Input() pageInfo: PageInfo;

  @Input() condition: any = {};

  private loading: boolean = false;

  private max: number = 0;

  @HostListener("scroll")
  onScroll() {
    if (this.loading) {
      return;
    }
    let height = this.el.nativeElement.offsetHeight;
    let scrollHeight = this.el.nativeElement.scrollHeight;
    let scrollTop = this.el.nativeElement.scrollTop;

    if (height + scrollTop >= scrollHeight - 100 && height + scrollTop > this.max) {
      this.max = scrollHeight + 100;
      this.loading = true;
      this.pageInfo.page = this.pageInfo.page + 1;
      this.condition.page = this.pageInfo.page;
      this.condition.size = this.pageInfo.size;
      if (!this.condition.sort) {
        this.condition.sort = this.pageInfo.sort;
      }
      this.dataService.query(this.condition).subscribe(res => {
        for (let item of res.json().content) {
          this.dataList.push(item);
        }
        this.loading = false;
      }, err => console.log(err));
    }
  }
}
