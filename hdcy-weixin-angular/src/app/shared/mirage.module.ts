import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
import {FormsModule} from "@angular/forms";
import {TagService} from "./service/tag.service";
import {HttpRestService} from "./service/http-rest.service";
import {CarouselComponent} from "./component/carousel.component";
import {PraiseService} from "./service/praise.service";
import {SwiperComponent} from "./component/swiper.component";
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [InfiniteScrollDirective, CarouselComponent, SwiperComponent],
  exports: [CommonModule, FormsModule, InfiniteScrollDirective, CarouselComponent, SwiperComponent],
  providers: [HttpRestService, TagService, PraiseService]
})
export default class MirageModule {

}
