/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {NavService} from "../mirage/service/nav-bar.service";
import {ListComponent} from "../mirage/component/list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'article-list',
    templateUrl: 'app/article/article-list.component.html'
})
export class ArticleListComponent extends ListComponent implements OnInit {

    articles:Array<any>;

    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private navService: NavService) {
        super(route);
    }

    ngOnInit() {
        this.articleService.query(this.pageInfo).subscribe(res => this.articles = res.json().content);
        this.navService.showNavEvent.emit("article");
    }

}
