/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article.module.css']
})
export class ArticleDetailComponent implements OnInit {

    article: any = {};

    tagName;

    fromTag:number;

    constructor(private articleService: ArticleService, private route: ActivatedRoute, private weixinService: WeixinService) {
      this.fromTag = route.snapshot.queryParams['fromTag'];
    }

    ngOnInit() {
      this.articleService.get(this.route.snapshot.params['id']).subscribe(value => {
        this.article = value;
        this.tagName = this.article.tagInfos[0]['name'];
        this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.title, value.image));
      });
    }

}
