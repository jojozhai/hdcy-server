import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {appRouting} from "./app.routing";
import {HttpModule} from "@angular/http";
import CommentModule from "./comment/comment.module";
@NgModule({
    imports: [
        //angular2 框架模块
        BrowserModule, FormsModule, HttpModule,
        //常用模块配置, 所有业务模块全部懒加载，不在这里配置
        CommentModule,
        //主路由配置
        appRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}

