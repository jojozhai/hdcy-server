import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {articleRouting} from "./article.routing";
import {ArticleListComponent} from "./article-list.component";
import {ArticleService} from "./article.service";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, articleRouting],
    declarations: [ArticleListComponent],
    providers: [ArticleService]
})
export default class ArticleModule {
}
