import {NgModule} from "@angular/core";
import MirageModule from "../shared/mirage.module";
import {giftRouting} from "./gift.routing";
import {GiftListComponent} from "./gift-list.component";
import {GiftDetailComponent} from "./gift-detail.component";
import {GiftService} from "./gift.service";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, giftRouting],
    declarations: [GiftListComponent, GiftDetailComponent],
    providers: [GiftService]

})
export default class GiftModule {
}
