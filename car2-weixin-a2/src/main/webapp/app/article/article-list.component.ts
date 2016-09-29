/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {ListComponent} from "../mirage/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {TagService} from "../mirage/service/tag.service";

@Component({
    moduleId: module.id,
    selector: 'article-list',
    templateUrl: 'article-list.component.html',
    styleUrls: ['article.component.css']
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
        if(tagId != 0){
            this.articleService.query(super.buildCondition({tagId: tagId})).subscribe(res => this.articles = res.json().content);
        }
    }

    navToDetail(article) {
        if(article.linkOut && article.business){
            window.location.href = article.outLink;
        }else{
            this.router.navigate(['/article', article.id]);
        }
    }

}
