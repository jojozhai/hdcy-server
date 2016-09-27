import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {articleRouting} from "./article.routing";
import {ArticleListComponent} from "./article-list.component";
import {ArticleService} from "./article.service";
import {ArticleDetailComponent} from "./article-detail.component";
import {ArticleComponent} from "./article.component";
import CommentModule from "../comment/comment.module";
import MirageModule from "../mirage/mirage.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommentModule, MirageModule, articleRouting],
    declarations: [ArticleComponent, ArticleListComponent, ArticleDetailComponent],
    providers: [ArticleService]
})
export default class ArticleModule {
}
