import {NgModule} from "@angular/core";
import {articleRouting} from "./article.routing";
import {ArticleListComponent} from "./article-list.component";
import {ArticleService} from "./article.service";
import {ArticleDetailComponent} from "./article-detail.component";
import {ArticleComponent} from "./article.component";
import CommentModule from "../comment/comment.module";
import MirageModule from "../shared/mirage.module";
import {ArticleDatePipe} from "./article-date.pipe";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, CommentModule, articleRouting],
    declarations: [ArticleComponent, ArticleListComponent, ArticleDetailComponent, ArticleDatePipe],
    providers: [ArticleService]
})
export default class ArticleModule {
}
