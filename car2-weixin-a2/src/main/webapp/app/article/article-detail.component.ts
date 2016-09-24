/**
 * Created by zhailiang on 16/9/24.
 */
import { Component, OnInit } from '@angular/core';
import {ArticleService} from "./article.service";
import {ActivatedRoute} from "@angular/router";
import {NavService} from "../service/nav-bar.service";

@Component({
    selector: 'article-detail',
    templateUrl: 'app/article/article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {

    article;

    constructor(private articleService: ArticleService, private navService: NavService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.article = this.articleService.get(params['id']).subscribe(value => this.article = value);
        });
        this.navService.hideNavEvent.emit();
    }

}
