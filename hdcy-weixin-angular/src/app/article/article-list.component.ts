/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {ArticleService} from "./article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ListComponent} from "../shared/component/list.component";
import {TagService} from "../shared/service/tag.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article.module.css']
})
export class ArticleListComponent extends ListComponent implements OnInit {

  articles: Array<any>;

  tags: Array<any>;

  currentTag: number = 0;

  tagWidth: number = 0;

  contentHeight: number = document.body.clientHeight - 90;

  cntsboxHeight: number = document.body.clientHeight - 50;
  constructor(public articleService: ArticleService,
              private tagService: TagService,
              private router: Router,
              private loadingService: LoadingService,
              route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    let tagId = this.getQueryParam("tagId");
    if (!tagId) {
      tagId = this.currentTag;
    }
    let condition: any = {};
    if (tagId != 0) {
      condition.tagId = tagId;
    }

    this.tagService.getChild().subscribe(res => {
      this.tags = res
      this.tagWidth = (this.tags.length + 1)*93.75;
      this.articleService.query(this.buildCondition(condition)).subscribe(res => {
        this.articles = res.json().content;
        this.currentTag = tagId;
        this.loadingService.loadingEvent.emit(false);
      });
    });
  }

  isActive(id: number) {
    return this.currentTag == id;
  }

  changeTag(tagId?: number) {
    let condition = super.buildCondition();
    if (tagId != 0) {
      condition.tagId = tagId;
    }
    condition.page = 0;
    this.articleService.query(condition).subscribe(res => {
      $('#contentUl').scrollTop(0);
      this.articles = res.json().content;
      this.currentTag = tagId;
    });
  }

  navToDetail(article) {
    if (article.linkOut && article.business) {
      window.location.href = article.outLink;
    } else {
      this.router.navigate(['/article', article.id], {queryParams: {fromTag: this.currentTag}});
    }
  }

}
