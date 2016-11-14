/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article.module.css']
})
export class ArticleDetailComponent implements OnInit {

    article: any = {};	
	chatcode='none';
    tagName;

    fromTag:number;
    detailboxHeight: number = document.body.clientHeight - 48;
    constructor(private articleService: ArticleService, private route: ActivatedRoute, private weixinService: WeixinService,
    private loadingService:LoadingService) {
      this.fromTag = route.snapshot.queryParams['fromTag'];
    }

    ngOnInit() {
      this.loadingService.loadingEvent.emit(true);
      this.articleService.get(this.route.snapshot.params['id']).subscribe(value => {
        this.article = value;
        this.tagName = this.article.tagInfos[0]['name'];
        this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.title, value['image']));
        this.loadingService.loadingEvent.emit(false);
        
      });
     
    }
    
  focus(guanzhu){
  	if (guanzhu) {
  		this.chatcode='block';
  	}else {
  		this.chatcode='none';
  	}
  	
  }

}
