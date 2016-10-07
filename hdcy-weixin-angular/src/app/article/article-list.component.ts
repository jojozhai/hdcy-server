/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ListComponent} from "../shared/component/list.component";
import {TagService} from "../shared/service/tag.service";

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleListComponent extends ListComponent implements OnInit {

    articles:Array<any>;

    tags: Array<any>;

    activeTag = true;

    constructor(
        private articleService: ArticleService,
        private tagService: TagService,
        private router: Router,
        private route: ActivatedRoute) {
        super(route);

    }

    ngOnInit() {
        this.articleService.query(this.pageInfo).subscribe(res => this.articles = res.json().content);
        this.tagService.getChild().subscribe(res => this.tags = res);
        this.activeTag = true;
    }

    changeTag(tagId?: number) {
        let condition = super.buildCondition();
        if(tagId != 0){
          condition.tagId = tagId;
        }
        this.articleService.query(condition).subscribe(res => this.articles = res.json().content);
    }

    navToDetail(article) {
        if(article.linkOut && article.business){
            window.location.href = article.outLink;
        }else{
            this.router.navigate(['/article', article.id]);
        }
    }

}
