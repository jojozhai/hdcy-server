/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {NavService} from "../service/nav-bar.service";

@Component({
    selector: 'article-list',
    templateUrl: 'app/article/article-list.component.html'
})
export class ArticleListComponent implements OnInit {

    articles:Observable<Array<any>>;

    constructor(private articleService: ArticleService, private navService: NavService) {

    }

    ngOnInit() {
        this.articles = this.articleService.query({size: 5});
        this.navService.showNavEvent.emit("article");
    }

}
