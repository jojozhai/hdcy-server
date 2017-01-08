/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";
import {LoadingService} from "../shared/service/loading.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    moduleId: module.id,
    selector: 'article-detail',
    templateUrl: 'article-detail.component.html',
    styleUrls: ['article.module.css']
})
export class ArticleDetailComponent implements OnInit {

    article: any = {tagInfos: []};
    chatcode = 'none';
    tagName: any;

    fromTag: number;

    content: any;

    detailboxHeight: number = document.body.clientHeight - 48;

    constructor(private articleService: ArticleService, private route: ActivatedRoute, private weixinService: WeixinService,
                private loadingService: LoadingService, private domSanitizer: DomSanitizer) {
        this.fromTag = route.snapshot.queryParams['fromTag'];
    }

    ngOnInit() {
        this.loadingService.loadingEvent.emit(true);
        this.articleService.get(this.route.snapshot.params['id']).subscribe((value:any) => {
            this.article = value;
            this.tagName = this.article.tagInfos[0]['name'];
            this.content = this.domSanitizer.bypassSecurityTrustHtml(value.content);
            this.weixinService.configShareInfo(new WeixinShareInfoChangedEvent(value.title, value.image));
            this.loadingService.loadingEvent.emit(false);
        });
    }

    focus(guanzhu: any) {
        if (guanzhu) {
            this.chatcode = 'block';
        } else {
            this.chatcode = 'none';
        }

    }

}
