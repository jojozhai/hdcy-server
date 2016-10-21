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
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
    imports: [CommonModule, KSSwiperModule],
    declarations: [InfiniteScrollDirective, CountDownDirective],
    exports: [CommonModule, FormsModule, KSSwiperModule, InfiniteScrollDirective, CountDownDirective],
    providers: [HttpRestService, WeixinService, TagService, PraiseService, LoadingService]
})
export default class MirageModule {

}
