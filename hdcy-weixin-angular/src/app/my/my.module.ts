import {NgModule} from "@angular/core";
import {myRouting} from "./my.routing";
import {MyListComponent} from "./my-list.component";
import MirageModule from "../shared/mirage.module";
import {MyInfoComponent} from "./my-info.component";
import {MyActivityComponent} from "./my-activity.component";
import {MyService} from "./my.service";
import {MyActivityStatePipe} from "./my-activity-state.pipe";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, myRouting],
    declarations: [MyListComponent, MyInfoComponent, MyActivityComponent, MyActivityStatePipe],
    providers: [MyService]
})
export default class MyModule {
}
