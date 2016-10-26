import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
import {FormsModule} from "@angular/forms";
import {TagService} from "./service/tag.service";
import {HttpRestService} from "./service/http-rest.service";
import {PraiseService} from "./service/praise.service";
import {KSSwiperModule} from "angular2-swiper";
import {WeixinService} from "./service/weixin.service";
import {LoadingService} from "./service/loading.service";
import {CountDownDirective} from "./directive/count-down.directive";
import {UserService} from "./service/user.service";
import {ParamService} from "./service/param.service";
import {SexPipe} from "./pipe/sex.pipe";
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
    imports: [CommonModule, KSSwiperModule],
    declarations: [InfiniteScrollDirective, CountDownDirective, SexPipe],
    exports: [CommonModule, FormsModule, KSSwiperModule, InfiniteScrollDirective, CountDownDirective, SexPipe],
    providers: [HttpRestService, UserService, WeixinService, TagService, PraiseService, LoadingService, ParamService]
})
export default class MirageModule {

}
