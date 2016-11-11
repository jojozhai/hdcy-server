import {NgModule} from "@angular/core";
import {articleRouting} from "./article.routing";
import {ArticleListComponent} from "./article-list.component";
import {ArticleService} from "./article.service";
import {ArticleDetailComponent} from "./article-detail.component";
import {ArticleComponent} from "./article.component";
import {ArticleDatePipe} from "./article-date.pipe";
import {SharedModule} from "../shared/shared.module";
import {CommentModule} from "../comment/comment.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [SharedModule, CommentModule, articleRouting],
    declarations: [ArticleComponent, ArticleListComponent, ArticleDetailComponent, ArticleDatePipe],
    providers: [ArticleService]
})
export class ArticleModule {
}
