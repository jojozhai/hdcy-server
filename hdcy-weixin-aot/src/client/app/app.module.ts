import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {VideoModule} from "./video/video.module";
import {LoginModule} from "./login/login.module";
import {CommentModule} from "./comment/comment.module";
import {WeixinService} from "./shared/service/weixin.service";
import {PraiseService} from "./shared/service/praise.service";
import {LoadingService} from "./shared/service/loading.service";
import {ArticleModule} from "./article/article.module";
import {TagService} from "./shared/service/tag.service";
import {ActivityModule} from "./activity/activity.module";
import {LeaderModule} from "./leader/leader.module";
import {MessageModule} from "./message/message.module";
import {ParamService} from "./shared/service/param.service";
import {MyModule} from "./my/my.module";
import {UserService} from "./shared/service/user.service";
import {AboutModule} from "./about/about.module";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot(),
    SharedModule, VideoModule, ArticleModule, ActivityModule, LeaderModule, MessageModule, MyModule, LoginModule, CommentModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, {provide: LocationStrategy, useClass: HashLocationStrategy}, WeixinService, LoadingService, PraiseService, ParamService, UserService, TagService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
