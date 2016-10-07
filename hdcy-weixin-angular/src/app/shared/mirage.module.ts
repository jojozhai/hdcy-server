import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
import {FormsModule} from "@angular/forms";
import {TagService} from "./service/tag.service";
import {HttpRestService} from "./service/http-rest.service";
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [InfiniteScrollDirective],
    exports: [CommonModule, FormsModule, InfiniteScrollDirective],
    providers: [HttpRestService, TagService]
})
export default class MirageModule {
}
