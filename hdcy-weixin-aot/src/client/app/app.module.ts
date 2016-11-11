import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {VideoModule} from "./video/video.module";
import {LoginModule} from "./login/login.module";
import {CommentModule} from "./comment/comment.module";
import {WeixinService} from "./shared/service/weixin.service";
import {PraiseService} from "./shared/service/praise.service";
import {LoadingService} from "./shared/service/loading.service";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot(),
    SharedModule, VideoModule, LoginModule, CommentModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, {provide: LocationStrategy, useClass: HashLocationStrategy}, WeixinService, LoadingService, PraiseService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
