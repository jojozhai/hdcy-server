import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
import {FormsModule} from "@angular/forms";
/**
 * Created by zhailiang on 16/9/26.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [InfiniteScrollDirective],
    exports: [CommonModule, FormsModule, InfiniteScrollDirective]
})
export default class MirageModule {
}
