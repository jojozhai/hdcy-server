/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";

@Component({
    selector: 'article-list',
    templateUrl: 'app/article/article-list.component.html'
})
export class ArticleListComponent implements OnInit {

    articles:Observable;

    constructor(private articleService: ArticleService) {
        this.articles = articleService.query({size: 100});
    }

    ngOnInit() {

    }

    onScroll(event) {
        console.log(event);
    }

}
