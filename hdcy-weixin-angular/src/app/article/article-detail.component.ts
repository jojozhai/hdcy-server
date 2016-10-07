/**
 * Created by zhailiang on 16/9/24.
 */
import { Component, OnInit } from '@angular/core';
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleDetailComponent implements OnInit {

    article: any = {};

    tag;

    constructor(private articleService: ArticleService, private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.articleService.get(this.route.snapshot.params['id']).subscribe(value => {
        this.article = value;
        //     this.tag = this.article.tagInfos[0]['name'];
      });
    }

}
