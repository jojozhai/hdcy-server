import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [InfiniteScrollDirective],
    exports: [InfiniteScrollDirective]
})
export default class MirageModule {
}
