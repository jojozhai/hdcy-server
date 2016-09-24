import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {appRouting} from "./app.routing";
import {HttpModule} from "@angular/http";
import {NavService} from "./service/nav-bar.service";
@NgModule({
    imports: [
        //angular2 框架模块
        BrowserModule, FormsModule, HttpModule,
        //主路由配置, 所有业务模块全部懒加载，不在这里配置
        appRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [NavService],
})
export class AppModule {
}

export const HTTP_PROFIX = "http://127.0.0.1:8171/weixin2/";
