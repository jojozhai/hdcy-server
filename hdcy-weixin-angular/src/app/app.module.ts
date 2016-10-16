import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HdcyWeixinAngularRoutingModule} from "./app-routing.module";
import VideoModule from "./video/video.module";
import ArticleModule from "./article/article.module";
import LeaderModule from "./leader/leader.module";
import MyModule from "./my/my.module";
import ActivityModule from "./activity/activity.module";
import LoginModule from "./login/login.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //框架模块
    BrowserModule, FormsModule, HttpModule,
    //路由模块
    HdcyWeixinAngularRoutingModule,
    //业务模块
    LoginModule, VideoModule, ArticleModule, ActivityModule, LeaderModule, MyModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
