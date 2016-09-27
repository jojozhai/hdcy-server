/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {ListComponent} from "../mirage/component/list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'article-list',
    templateUrl: 'article-list.component.html',
    styleUrls: ['article-list.component.css']
})
export class ArticleListComponent extends ListComponent implements OnInit {

    articles:Array<any>;

    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute) {
        super(route);
    }

    ngOnInit() {
        this.articleService.query(this.pageInfo).subscribe(res => this.articles = res.json().content);
    }

}
